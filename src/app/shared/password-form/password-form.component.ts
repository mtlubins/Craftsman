import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {FieldValidationService} from '../field-validator/field-validation.service';
import {PasswordValidationService} from './password-validation-service';
import {passwordStrenght} from './password-strength';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  public passwordForm: FormGroup;
  public passwordVisible: boolean;
  public confirmPasswordVisible: boolean;
  public passwordStrength: number;

  constructor (private fb: FormBuilder,
               public fieldValidationService: FieldValidationService,
               private passwordValidationService: PasswordValidationService) {}

  ngOnInit() {
    this.passwordVisible = false;
    this.confirmPasswordVisible = false;
    this.buildForm();
    this.onPasswordChanges();
  }

  submitForm() {
    this.fieldValidationService.cantTouchTheControl(this.password);
    this.fieldValidationService.cantTouchTheControl(this.confirmPassword);
    if (this.passwordForm.valid) {
      return {password: this.password.value};
    }
    return false;
  }

  showPassword(mode: number) {
    mode === 0 ? this.passwordVisible = true : this.confirmPasswordVisible = true;
  }

  hidePassword(mode: number) {
    mode === 0 ? this.passwordVisible = false : this.confirmPasswordVisible = false;
  }

  onPasswordChanges(): void {
    this.password.valueChanges.subscribe(val => {
      this.passwordStrength = this.passwordValidationService.calculatePasswordStrength(val);
    });
  }

  buildForm() {
    this.passwordForm = this.fb.group({
      passwordGroup: new FormGroup({
        password: new FormControl('',
          Validators.compose([Validators.required,
            this.passwordStrengthValidation.bind(this)])),
        confirmPassword: new FormControl('')
      }, this.equalPasswordValidation)});
  }

  public equalPasswordValidation(passwordGroup: FormGroup): ValidationErrors {
    if (!passwordGroup.value.password || passwordGroup.value.password !== passwordGroup.value.confirmPassword) {
      return {
        equalPasswordRequired: true
      };
    }
    return null;
  }

  public passwordStrengthValidation(passwordControl: FormControl): ValidationErrors {
    const password = passwordControl.value;
    if (password && this.passwordValidationService.calculatePasswordStrength(password) === passwordStrenght.tooWeak) {
      return {
        tooWeakPassword: true
      };
    }
    return null;
  }

  get password() {
    return this.passwordForm.get('passwordGroup').get('password');
  }

  get confirmPassword() {
    return this.passwordForm.get('passwordGroup').get('confirmPassword');
  }
}
