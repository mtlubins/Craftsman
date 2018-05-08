import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldValidationService} from '../../shared/field-validator/field-validation.service';
import {IUser} from '../../shared/models/user.interface';
import {AccountResourceService} from '../../rest/resources/account-resource/account-resource.service';
import {BaseHttpService} from '../../rest/http/base-http.service';

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
              private accountService: AccountResourceService) {
    this.buildForm();
  }

  send() {
    this.fieldValidationService.cantTouchTheForm(this.enrollmentForm);
    const passwordData = this.passwordForm.submitForm();
    if (passwordData && this.enrollmentForm.valid) {
      const userToCreate: IUser = Object.assign({}, passwordData, this.enrollmentForm.value);
      this.accountService.createUser(userToCreate)
        .subscribe(
          (response) => console.log('zarejestrowano'), // // Szczel, zaloguj i przenieś na jakąś spoko stronkę
          (err) => console.log(err)
        );
    } else {
      console.log('dupa kupa');
      // Tutaj będzie tosterowy serwis
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
      city: [],
      street: [],
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
}
