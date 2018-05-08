import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ICraftsman} from '../../../rest/resources/craftsmen-resource/craftsman.interface';
import {IHttpError} from '../../../rest/http/http-error.interface';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {AccountResourceService} from '../../../rest/resources/account-resource/account-resource.service';
import {IUser} from '../../../shared/models/user.interface';

@Injectable()
export class UserProfileResolver implements Resolve<IUser | IHttpError> {
  constructor(private accountService: AccountResourceService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<IUser | IHttpError> {
    return this.accountService.getProfile()
      .catch(err => {
        this.router.navigate(['error-occurred']);
        return of(err);
      });
  }
}
