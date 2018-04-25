import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JoinUsComponent} from './enrollment-container/join-us.component';
import {JoinUsRouting} from './join-us.routing';
import {UserEnrollmentComponent} from './user/user-enrollment.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EnrollmentModeComponent} from './enrollment-mode/enrollment-mode.component';
import {CraftsmanEnrollmentComponent} from './craftsman/craftsman-enrollment.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, JoinUsRouting, ReactiveFormsModule, SharedModule],
  declarations: [JoinUsComponent, UserEnrollmentComponent, EnrollmentModeComponent, CraftsmanEnrollmentComponent],
  exports: []
})
export class JoinUsModule {}
