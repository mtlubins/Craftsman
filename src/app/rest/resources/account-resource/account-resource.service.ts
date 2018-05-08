import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../http/base-http.service';
import {environment} from '../../../../environments/environment';
import {IUser} from '../../../shared/models/user.interface';
import {Observable} from 'rxjs/Observable';
import {IHttpError} from '../../http/http-error.interface';

@Injectable()
export class AccountResourceService {
  constructor(private httpService: BaseHttpService) {}

  createUser(data: IUser): Observable<IUser | IHttpError> {
    const url = environment.API_PATH + environment.USER_PATH;
    return this.httpService.post(url, data);
  }

  getProfile(): Observable<any> {
    const url = environment.API_PATH + environment.USER_PATH + environment.USER_PROFILE_PATH;
    return this.httpService.get(url);
  }
}
