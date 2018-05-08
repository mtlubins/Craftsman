import {Injectable} from '@angular/core';
import {BaseHttpService} from '../http/base-http.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {IHttpError} from '../http/http-error.interface';
import {ICustomerCredentials} from '../../shared/models/customerCredentials.interface';

export interface IAccessToken {
  access_token: string;
}

@Injectable()
export class AuthService {

  constructor(private httpService: BaseHttpService,
              private  jwtStorage: JwtStorageService) {}

  login(data: ICustomerCredentials): Observable<IAccessToken | IHttpError> {
    const url = environment.API_PATH + environment.LOGIN_PATH;
    return this.httpService.post<IAccessToken>(url, data)
      .do((response: IAccessToken) => {
        console.log(response);
        this.jwtStorage.setToken(response.access_token);
      })
      .catch(err => BaseHttpService.handleHttpError(err));
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    console.log(token);
    return token ? !this.isTokenExpired() : false;
  }

  isTokenExpired() {
    const decodedPayload = JSON.parse(atob(this.getToken().split('.')[1])).exp;
    return decodedPayload <= Math.trunc(Date.now() / 1000);
  }

  getToken() {
    return this.jwtStorage.getToken();
  }
}
