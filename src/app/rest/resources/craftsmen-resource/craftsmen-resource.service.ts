import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {BaseHttpService} from '../../http/base-http.service';
import {ICraftsman} from './craftsman.interface';
import {IHttpError} from '../../http/http-error.interface';




@Injectable()
export class CraftsmenResourceService {

  constructor(private httpService: BaseHttpService) {}

  getCraftsmen(): Observable<ICraftsman[] | IHttpError> {
    const url = environment.API_PATH + environment.CRAFTSMEN_PATH;
    return this.httpService.get<ICraftsman[]>(url)
      .catch(err => BaseHttpService.handleHttpError(err));
  }

  getError(): Observable<any> {
    const url = environment.API_PATH + environment.ERROR_PATH;
    return this.httpService.get<any>(url)
      .catch(err => BaseHttpService.handleHttpError(err));
  }

}