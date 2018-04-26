import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BaseHttpService} from '../../../rest/http/base-http.service';
import {environment} from '../../../../environments/environment';
import {ICraftsman} from '../../../rest/resources/craftsmen-resource/craftsman.interface';
import {IHttpError} from '../../../rest/http/http-error.interface';

@Injectable()
export class UserProfileService {

  constructor(private httpService: BaseHttpService) {}

  getCraftsmen(): Observable<ICraftsman> {
    const url = environment.API_PATH + environment.CRAFTSMEN_PATH + environment.PROFILE_PATH;
    return this.httpService.get<ICraftsman>(url)
      .catch(err => BaseHttpService.handleHttpError(err));
  }
}
