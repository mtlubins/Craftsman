import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {UserProfileComponent} from './my-account/user-profile/component/user-profile.component';
import {UserProfileResolver} from './my-account/user-profile/service/user-profile.resolver';
import {ErrorOccurredComponent} from './shared/error-occurred/error-occurred.component';
import {PasswordFormComponent} from './shared/password-form/password-form.component';
import {AuthGuard} from './rest/auth/auth.guard';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-account',
    component: UserProfileComponent,
    resolve: {resolvedProfileData: UserProfileResolver},
    canActivate: [AuthGuard]
  },
  {
    path: 'join-us',
    loadChildren: './join-us/join-us.module#JoinUsModule'
  },
  {
    path: 'paswd',
    component: PasswordFormComponent
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
