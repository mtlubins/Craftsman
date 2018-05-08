import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/component/user-profile.component';
import {UserProfileResolver} from './user-profile/service/user-profile.resolver';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  providers: [UserProfileResolver]
})
export class UserAccountModule {}
