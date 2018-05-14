import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoinUsNavComponent} from './join-us-nav/join-us-nav.component';
import {JoinUsRouting} from './join-us.routing';
import {UserEnrollmentComponent} from './user/user-enrollment.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CraftsmanEnrollmentComponent} from './craftsman/craftsman-enrollment.component';
import {SharedModule} from '../shared/shared.module';
import {JoinUsContainerComponent} from './join-us-container/join-us-container.component';

const MODULE_NG_IMPORTS = [
  CommonModule, ReactiveFormsModule
];

const MODULE_IMPORTS = [
  JoinUsRouting, SharedModule
];

const MODULE_DECLARATIONS = [
  JoinUsNavComponent, UserEnrollmentComponent, CraftsmanEnrollmentComponent,
  JoinUsContainerComponent
];

@NgModule({
  imports: [...MODULE_NG_IMPORTS, ...MODULE_IMPORTS],
  declarations: [...MODULE_DECLARATIONS]
})
export class JoinUsModule {}
