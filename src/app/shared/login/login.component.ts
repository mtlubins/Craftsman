import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../rest/auth/auth.service';
import {IHttpError} from '../../rest/http/http-error.interface';
import {ICustomerCredentials} from '../models/customer-credentials.interface';
import {FieldValidationService} from '../field-validator/field-validation.service';
import {Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

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
              public fieldValidationService: FieldValidationService,
              private router: Router,
              private toastr: ToastsManager,
              vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buildForm();
  }

  logIn() {
    this.fieldValidationService.cantTouchTheForm(this.loginForm);
    if (this.loginForm.valid) {
      const loginData: ICustomerCredentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      console.log(loginData);
      this.authService.login(loginData)
        .subscribe(() => {
          this.router.navigateByUrl('/my-account');
          },
          (err: IHttpError) => {
            this.toastr.error(err.userMessage, 'Oops!');
          });
    } else { this.toastr.error('This is not good lord! The form is broken :(', 'Oops!'); }
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
