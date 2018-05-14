import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  authService: AuthService;

  constructor(private inject: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.inject.get(AuthService);
    const needAuthEndpointsList: string[] = [
      environment.endpoints.userPath + environment.endpoints.userProfilePath
    ];

    if (needAuthEndpointsList.find(element => request.url.indexOf(element) > -1)) {
      const accessToken = this.authService.getToken();
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
