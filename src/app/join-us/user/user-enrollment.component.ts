import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

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
    console.log(this.enrollmentForm.value);
  }

  createForm() {
    this.enrollmentForm = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      confirmPassword: [],
      phone: [],
      city: [],
      street: [],
      terms: [],
    });
  }
}
