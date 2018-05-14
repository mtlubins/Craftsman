import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../http/base-http.service';
import {environment} from '../../../../environments/environment';
import {IUser} from '../../../shared/models/user.interface';
import {Observable} from 'rxjs/Observable';
import {IHttpError} from '../../http/http-error.interface';
import {ILoggedUserData} from '../../../shared/models/logged-user-data.interface';
import {LoggedUserStorageService} from '../../../shared/storage/logged-user-storage.service';
import {JwtStorageService} from '../../../shared/storage/jwt-storage.service';

@Injectable()
export class AccountResourceService {
  constructor(private httpService: BaseHttpService,
              private jwtStorage: JwtStorageService,
              private loggedUserDataService: LoggedUserStorageService) {}

  createUser(data: IUser): Observable<any | IHttpError> {
    const url = environment.endpoints.apiPath + environment.endpoints.userPath;
    return this.httpService.post<any>(url, data)
      .do((response) => {
        this.jwtStorage.setToken(response.access_token);
        this.loggedUserDataService.setUserData(response.user_data);
      })
      .catch(err => BaseHttpService.handleHttpError(err));
  }

  getProfile(): Observable<IUser | IHttpError> {
    const url = environment.endpoints.apiPath + environment.endpoints.userPath + environment.endpoints.userProfilePath;
    return this.httpService.get<IUser>(url)
      .catch(err => BaseHttpService.handleHttpError(err));
  }
}
