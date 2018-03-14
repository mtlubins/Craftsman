import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './shared/login/login.component';
import {CraftsmenListComponent} from './shared/craftsmen-list/craftsmen-list.component';
import {CraftsmenResolverService} from './rest/resources/craftsmen-resource/craftsmen-resolver.service';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'craftsmen',
    component: CraftsmenListComponent,
    resolve: {resolvedCraftsmen: CraftsmenResolverService}
  }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES);
