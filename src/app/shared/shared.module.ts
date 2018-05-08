import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {LocaleStorageService} from './storage/local-storage.service';
import {JwtStorageService} from './storage/jwt-storage.service';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ErrorOccurredComponent} from './error-occurred/error-occurred.component';
import {DisplayObjectsPipe} from './pipes/display-objects.pipe';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldValidatorComponent} from './field-validator/field-validator.component';
import {MapToIterablePipe} from './pipes/map-to-iterable.pipe';
import {PasswordFormComponent} from './password-form/password-form.component';
import {FieldValidationService} from './field-validator/field-validation.service';
import {PasswordValidationService} from './password-form/password-validation-service';

const MODULE_COMPONENTS = [
  LoginComponent, HeaderComponent, ErrorOccurredComponent,
  FooterComponent, FieldValidatorComponent, PasswordFormComponent
];

const MODULE_PIPES = [
  MapToIterablePipe, DisplayObjectsPipe
];

const MODULE_PROVIDERS = [
  LocaleStorageService, JwtStorageService, FieldValidationService, PasswordValidationService
];

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations : [...MODULE_COMPONENTS, ...MODULE_PIPES],
  exports: [...MODULE_COMPONENTS, ...MODULE_PIPES],
  providers: [...MODULE_PROVIDERS]
})
export class SharedModule {}
