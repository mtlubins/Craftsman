import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {ICraftsman} from '../../../rest/resources/craftsmen-resource/craftsman.interface';
import {IHttpError} from '../../../rest/http/http-error.interface';
import {UserProfileService} from './user-profile.service';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class UserProfileResolver implements Resolve<ICraftsman | IHttpError> {
  constructor(private userProfileService: UserProfileService,
              private router: Router) {}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<ICraftsman | IHttpError> {
    return this.userProfileService.getCraftsmen()
      .catch(err => {
        this.router.navigate(['error-occurred']);
        return of(err);
      });
  }
}
