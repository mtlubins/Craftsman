import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../rest/auth/auth.service';
import {IAccessToken} from '../../rest/auth/access-token.interface';
import {IHttpError} from '../../rest/http/http-error.interface';
import {JwtStorageService} from '../storage/jwt-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public token: any;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private jwtService: JwtStorageService) {}

  ngOnInit() {
    this.buildForm();
  }

  logIn() {
    const loginData = {
      login: this.loginForm.value.login,
      password: this.loginForm.value.password
    };
    console.log(loginData);
    this.authService.login(loginData)
      .subscribe(
        (response: IAccessToken) => {
          this.token = this.jwtService.getToken();
      },
      (err: IHttpError) => {
            console.log(err.userMessage);
      });
  }

  buildForm() {
    this.loginForm = this.fb.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
