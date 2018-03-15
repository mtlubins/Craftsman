import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor on ' + request.url);
    const needAuthEndpointsList: string[] = [
      environment.CRAFTSMEN_PATH + environment.PROFILE_PATH
    ];

    if (needAuthEndpointsList.find(element => request.url.indexOf(element) > -1)) {
      console.log(request);
      console.log('doklejam');
      const accessToken = this.jwtService.getToken();
      console.log(accessToken);
      const newRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`),
      });
      console.log(newRequest);
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
