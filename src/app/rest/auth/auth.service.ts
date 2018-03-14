import {Injectable} from '@angular/core';
import {ICustomerCredentials} from './customer-credentials.interface';
import {BaseHttpService} from '../http/base-http.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {IAccessToken} from './access-token.interface';
import {environment} from '../../../environments/environment';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {IHttpError} from '../http/http-error.interface';

@Injectable()
export class AuthService {

  constructor(private httpService: BaseHttpService,
              private  jwtStorage: JwtStorageService) {}

  login(data: ICustomerCredentials): Observable<IAccessToken | IHttpError> {
    const url = environment.API_PATH + environment.LOGIN_PATH;
    return this.httpService.post<IAccessToken>(url, data)
      .do((response: IAccessToken) => {
        this.jwtStorage.setToken(response.access_token);
      })
      .catch(err => BaseHttpService.handleHttpError(err));
  }
}
