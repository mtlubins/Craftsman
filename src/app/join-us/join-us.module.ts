import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoinUsComponent} from './enrollment-container/join-us.component';
import {JoinUsRouting} from './join-us.routing';
import {UserEnrollmentComponent} from './user/user-enrollment.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EnrollmentModeComponent} from './enrollment-mode/enrollment-mode.component';
import {CraftsmanEnrollmentComponent} from './craftsman/craftsman-enrollment.component';
import {SharedModule} from '../shared/shared.module';

const MODULE_NG_IMPORTS = [
  CommonModule, ReactiveFormsModule
];

const MODULE_IMPORTS = [
  JoinUsRouting, SharedModule
];

const MODULE_DECLARATIONS = [
  JoinUsComponent, UserEnrollmentComponent, EnrollmentModeComponent, CraftsmanEnrollmentComponent
];

@NgModule({
  imports: [...MODULE_NG_IMPORTS, ...MODULE_IMPORTS],
  declarations: [...MODULE_DECLARATIONS]
})
export class JoinUsModule {}
