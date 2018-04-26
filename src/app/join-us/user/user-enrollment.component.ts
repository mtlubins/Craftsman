import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldValidationService} from '../../shared/field-validator/field-validation.service';

@Component({
  selector: 'app-user-enrollment',
  templateUrl: 'user-enrollment.component.html',
  styleUrls: ['user-enrollment.component.scss']
})
export class UserEnrollmentComponent {
  @ViewChild('passwordForm') passwordForm;
  public enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder,
              public fieldValidationService: FieldValidationService) {
    this.buildForm();
  }

  send() {
    this.fieldValidationService.cantTouchTheForm(this.enrollmentForm);
    const passwordData = this.passwordForm.submitForm();
    if (passwordData && this.enrollmentForm.valid) {
      console.log(Object.assign({}, passwordData, this.enrollmentForm.value));
    } else {
      console.log('dupa kupa');
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

