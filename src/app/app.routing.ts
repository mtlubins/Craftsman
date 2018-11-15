import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {UserProfileComponent} from './my-account/user-profile/component/user-profile.component';
import {ErrorOccurredComponent} from './shared/error-occurred/error-occurred.component';
import {AuthGuard} from './rest/auth/auth.guard';
import {HomepageComponent} from './shared/homepage/homepage.component';
import { JoinUsModule} from './join-us/join-us.module';
import {SearchComponent} from './shared/search/serach.component';

export function loadJoinUsModule() {
  return JoinUsModule;
}

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-account',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'join-us',
    loadChildren: loadJoinUsModule
  },
  {
    path: 'search-craftsman',
    component: SearchComponent
  },
  {
    path: 'error-occurred',
    component: ErrorOccurredComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
