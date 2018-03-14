import {IHttpError} from '../../http/http-error.interface';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ICraftsman} from './craftsman.interface';
import {Injectable} from '@angular/core';
import {CraftsmenResourceService} from './craftsmen-resource.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class CraftsmenResolverService implements Resolve<ICraftsman[] | IHttpError> {

  constructor(private craftsmanResource: CraftsmenResourceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICraftsman[] | IHttpError> {
    return this.craftsmanResource.getCraftsmen();
  }
}
