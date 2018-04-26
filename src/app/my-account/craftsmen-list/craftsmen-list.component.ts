import {Component, OnInit} from '@angular/core';
import {CraftsmenResourceService} from '../../rest/resources/craftsmen-resource/craftsmen-resource.service';
import {ICraftsman} from '../../rest/resources/craftsmen-resource/craftsman.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IHttpError} from '../../rest/http/http-error.interface';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-craftsmen-list',
  templateUrl: 'craftsmen-list.component.html'
})
export class CraftsmenListComponent implements OnInit {

  public craftsmen: ICraftsman[];

  constructor(private craftsmenService: CraftsmenResourceService,
              private router: Router) {}

  ngOnInit() {
    this.craftsmenService.getCraftsmen()
      .subscribe((response) => {
        this.craftsmen = response;
      }, (err: IHttpError) => {
        console.log('leci error');
        console.log(err.userMessage);
        this.router.navigate(['error-occurred']);
        return of(err);
      });
  }
}
