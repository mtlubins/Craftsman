import {Injectable} from '@angular/core';
import {BaseHttpService} from '../http/base-http.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';
import {JwtStorageService} from '../../shared/storage/jwt-storage.service';
import {IHttpError} from '../http/http-error.interface';
import {ICustomerCredentials} from '../../shared/models/customer-credentials.interface';
import {LoggedUserStorageService} from '../../shared/storage/logged-user-storage.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private httpService: BaseHttpService,
              private  jwtStorage: JwtStorageService,
              private loggedUserDataService: LoggedUserStorageService,
              private router: Router) {}
// Chujowo z tym any tutaj 8=D
  login(data: ICustomerCredentials): Observable<any | IHttpError> {
    const url = environment.endpoints.apiPath + environment.endpoints.loginPath;
    return this.httpService.post<any>(url, data)
      .do((response) => {
        this.jwtStorage.setToken(response.access_token);
        this.loggedUserDataService.setUserData(response.user_data);
      })
      .catch(err => BaseHttpService.handleHttpError(err));
  }

  logout() {
    this.jwtStorage.removeToken();
    this.loggedUserDataService.removeUserData();
    this.router.navigate(['']);
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
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
