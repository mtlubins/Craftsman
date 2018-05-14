import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/component/user-profile.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent]
})
export class UserAccountModule {}
