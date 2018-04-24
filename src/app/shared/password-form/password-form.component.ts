import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {FieldValidationService} from '../field-validator/field-validation.service';
import {PasswordValidationService} from './password-validation-service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  public passwordForm: FormGroup;
  public passwordVisible: boolean;
  public confirmPasswordVisible: boolean;

  constructor(private fb: FormBuilder,
              public fieldValidationService: FieldValidationService,
              private passwordValidationService: PasswordValidationService) {}

  ngOnInit() {
    this.passwordVisible = false;
    this.confirmPasswordVisible = false;
    this.buildForm();
  }

  send() {
    // console.log(this.passwordForm.valid);
    // console.log(this.confirmPassword);
    console.log(this.passwordValidationService.checkPasswordSpecialChar(this.password.value, 1));
  }

  equalPasswordValidation(passwordGroup: FormGroup): ValidationErrors {
    if (!passwordGroup.value.password || passwordGroup.value.password !== passwordGroup.value.confirmPassword) {
      return {
        equalPasswordRequired: true
      };
    }
    return null;
  }

  showPassword(mode: number) {
    mode === 0 ? this.passwordVisible = true : this.confirmPasswordVisible = true;
  }

  hidePassword(mode: number) {
    mode === 0 ? this.passwordVisible = false : this.confirmPasswordVisible = false;
  }

  buildForm() {
    this.passwordForm = this.fb.group({
      passwordGroup: new FormGroup({
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('')
      }, this.equalPasswordValidation)});
  }

  get password() {
    return this.passwordForm.get('passwordGroup').get('password');
  }

  get confirmPassword() {
    return this.passwordForm.get('passwordGroup').get('confirmPassword');
  }
}
