import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldValidationService} from '../../shared/field-validator/field-validation.service';
import {IUser} from '../../shared/models/user.interface';
import {AccountResourceService} from '../../rest/resources/account-resource/account-resource.service';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
  selector: 'app-user-enrollment',
  templateUrl: 'user-enrollment.component.html',
  styleUrls: ['user-enrollment.component.scss']
})
export class UserEnrollmentComponent {
  @ViewChild('passwordForm') passwordForm;
  public enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder,
              public fieldValidationService: FieldValidationService,
              private accountService: AccountResourceService,
              private  jwtStorage: JwtStorageService,
              private router: Router,
              private toastr: ToastsManager,
              vcr: ViewContainerRef) {
  this.toastr.setRootViewContainerRef(vcr);
    this.buildForm();
}

  send() {
    this.fieldValidationService.cantTouchTheForm(this.enrollmentForm);
    const passwordData = this.passwordForm.submitForm();
    if (passwordData && this.enrollmentForm.valid) {
      const userToCreate: IUser = Object.assign({}, passwordData, this.enrollmentForm.value);
      this.accountService.createUser(userToCreate)
        .subscribe(
          (response) => {
            console.log(response);
            this.jwtStorage.setToken(response.access_token);
            this.router.navigateByUrl('/my-account');
          },
              (err) => this.toastr.error(err.userMessage, 'Oops!')
          );
    } else {
      this.toastr.error('This is not good lord! The form is broken :(', 'Oops!');
    }
  }

  buildForm() {
    this.enrollmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: ['', Validators.compose([Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.required])],
      city: ['', Validators.required],
      street: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  get firstName() {
    return this.enrollmentForm.get('firstName');
  }

  get lastName() {
    return this.enrollmentForm.get('lastName');
  }

  get email() {
    return this.enrollmentForm.get('email');
  }

  get phone() {
    return this.enrollmentForm.get('phone');
  }

  get terms() {
    return this.enrollmentForm.get('terms');
  }

  get city() {
    return this.enrollmentForm.get('city');
  }

  get street() {
    return this.enrollmentForm.get('street');
  }
}
