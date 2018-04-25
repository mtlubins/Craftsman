import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BaseHttpService} from './http/base-http.service';
import {CraftsmenResourceService} from './resources/craftsmen-resource/craftsmen-resource.service';
import {AuthService} from './auth/auth.service';
import {SharedModule} from '../shared/shared.module';
import {AccessTokenInterceptor} from './auth/access-token.interceptor';
import {RefreshTokenInterceptor} from './auth/refresh-token.interceptor';

const MAIN_RESOURCES = [
  BaseHttpService, AuthService,
  // {
  //   provide: CraftsmenResourceService, deps: [BaseHttpService],
  //   useFactory(http: BaseHttpService) {
  //     return new CraftsmenResourceService(http);
  //   }
  // }, due to use factory i can create services dynamically - have to be same interface
  {
    provide: CraftsmenResourceService, useClass: CraftsmenResourceService
  },
];

const INTERCEPTORS = [
  {provide: HTTP_INTERCEPTORS, useClass: AccessTokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true}
  ];

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ...MAIN_RESOURCES,
    ...INTERCEPTORS
  ],
})
export class RestLayerModule {}



