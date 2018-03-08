import {Injectable} from '@angular/core';
import {HttpServiceInterface} from '../http/http-service.interface';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CraftsmenResourceService {
  constructor(private httpService: HttpServiceInterface) {}

  getCraftsmen() {
    const url = environment.API_PATH + environment.CRAFTSMEN_PATH;
    return this.httpService.get(url, true) as Observable<any>;
  }
}
