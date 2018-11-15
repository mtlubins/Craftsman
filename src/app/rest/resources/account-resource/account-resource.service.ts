import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../http/base-http.service';
import {environment} from '../../../../environments/environment';
import {IUser} from '../../../shared/models/user.interface';
import {Observable} from 'rxjs';
import {catchError } from 'rxjs/operators';
import {IHttpError} from '../../http/http-error.interface';


@Injectable()
export class AccountResourceService {
  constructor(private httpService: BaseHttpService) {}

  createUser(data: IUser): Observable<any | IHttpError> {
    const url = environment.endpoints.apiPath + environment.endpoints.userPath;
    return this.httpService.post<any>(url, data)
      .pipe(
        catchError (err => BaseHttpService.handleHttpError(err)));
  }

  getProfile(): Observable<IUser | IHttpError> {
    const url = environment.endpoints.apiPath + environment.endpoints.userPath + environment.endpoints.userProfilePath;
    return this.httpService.get<IUser>(url).pipe(
        catchError(err => BaseHttpService.handleHttpError(err)));
  }
}
