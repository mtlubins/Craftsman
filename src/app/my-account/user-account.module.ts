import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/component/user-profile.component';
import {UserProfileService} from './user-profile/service/user-profile.service';
import {UserProfileResolver} from './user-profile/service/user-profile.resolver';

@NgModule({
  imports: [],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  providers: [UserProfileService, UserProfileResolver]
})
export class UserAccountModule {}
