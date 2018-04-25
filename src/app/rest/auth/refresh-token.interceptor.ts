import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  private authService: AuthService;
  constructor(private inject: Injector, private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.inject.get(AuthService);
    if (this.authService.isTokenExpired()) {
      console.log('dupa intercept');
    }
    return next.handle(request);
  }
}
