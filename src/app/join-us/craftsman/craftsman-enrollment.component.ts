import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldValidationService} from '../../shared/field-validator/field-validation.service';
import {AccountResourceService} from '../../rest/resources/account-resource/account-resource.service';
import {IUser} from '../../shared/models/user.interface';
import {ToastsManager} from 'ng6-toastr';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-craftsman-enrollment',
  templateUrl: 'craftsman-enrollment.component.html',
  styleUrls: ['../user/user-enrollment.component.scss']
})
export class CraftsmanEnrollmentComponent {
  @ViewChild('passwordForm') passwordForm;
  enrollmentForm: FormGroup;

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
    this.fieldValidationService.markFormAsTouched(this.enrollmentForm);
    const passwordData = this.passwordForm.submitForm();
    if (this.enrollmentForm.valid && passwordData) {
      const userToCreate: IUser = Object.assign({},
        passwordData, {craftsmen: true}, this.enrollmentForm.value);
      this.accountService.createUser(userToCreate)
        .subscribe(
          (response) => {
            this.jwtStorage.setToken(response.access_token);
            this.router.navigateByUrl('/my-account');
          },
          (err) => {
            this.toastr.error(err);
            console.log(err);
          }
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
      phone: ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
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
