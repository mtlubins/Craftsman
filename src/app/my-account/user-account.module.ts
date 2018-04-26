import {NgModule} from '@angular/core';
import {UserProfileComponent} from './user-profile/component/user-profile.component';
import {UserProfileService} from './user-profile/service/user-profile.service';
import {UserProfileResolver} from './user-profile/service/user-profile.resolver';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {CraftsmenListComponent} from './craftsmen-list/craftsmen-list.component';
import {RestLayerModule} from '../rest/rest-layer.module';

@NgModule({
  imports: [CommonModule, SharedModule, RestLayerModule],
  declarations: [UserProfileComponent, CraftsmenListComponent],
  exports: [UserProfileComponent],
  providers: [UserProfileService, UserProfileResolver]
})
export class UserAccountModule {}
