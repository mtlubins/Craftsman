import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-enrollment',
  templateUrl: 'user-enrollment.component.html',
  styleUrls: ['user-enrollment.component.scss']
})
export class UserEnrollmentComponent {
  enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  send() {
    this.cantTouchTheForm(this.enrollmentForm);
    console.log(this.enrollmentForm.value);
    console.log(this.enrollmentForm.valid);
    console.log(this.email);
  }

  createForm() {
    this.enrollmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])],
      city: [],
      street: [],
      terms: ['', Validators.requiredTrue],
    });
  }

  cantTouchTheForm(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      this.markFieldOnForm(form, field);
    });
  }

  markFieldOnForm(formName: FormGroup, fieldName: string) {
    formName.controls[fieldName].markAsTouched();
    formName.controls[fieldName].markAsDirty();
  }

  cantTouchThis(controlName: FormControl) {
    return controlName.dirty || controlName.touched;
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

