import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {CraftsmenListComponent} from './shared/craftsmen-list/craftsmen-list.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'craftsmen',
    component: CraftsmenListComponent
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
