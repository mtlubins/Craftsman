import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-craftsman-enrollment',
  templateUrl: 'craftsman-enrollment.component.html',
  styleUrls: ['craftsman-enrollment.component.scss']
})
export class CraftsmanEnrollmentComponent {
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
