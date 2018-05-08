import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../rest/auth/auth.service';
import {IHttpError} from '../../rest/http/http-error.interface';
import {ICustomerCredentials} from '../models/customerCredentials.interface';
import {FieldValidationService} from '../field-validator/field-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public token: any;
  public passwordVisible: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              public fieldValidationService: FieldValidationService) {}

  ngOnInit() {
    this.buildForm();
  }

  logIn() {
    if (this.loginForm.valid) {
      const loginData: ICustomerCredentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      console.log(loginData);
      this.authService.login(loginData)
        .subscribe(() => {
            // TO DO REDIRECT ?
          },
          (err: IHttpError) => {
            console.log(err.userMessage);
          });
    } else { console.log('dupa kupa'); }
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required]]
    });
  }

  showPassword() {
    this.passwordVisible = true;
  }

  hidePassword() {
    this.passwordVisible = false;
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
