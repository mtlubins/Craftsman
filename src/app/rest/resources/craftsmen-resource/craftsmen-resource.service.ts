
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';

import {BaseHttpService} from '../../http/base-http.service';
import {ICraftsman} from './craftsman.interface';

@Injectable()
export class CraftsmenResourceService {

  constructor(private httpService: BaseHttpService) {}

  getCraftsmen(): Observable<ICraftsman[]> {
    const url = environment.endpoints.apiPath + environment.endpoints.craftsmanPath;
    return this.httpService.get<ICraftsman[]>(url).pipe(
      catchError(err => BaseHttpService.handleHttpError(err)));
  }
}
