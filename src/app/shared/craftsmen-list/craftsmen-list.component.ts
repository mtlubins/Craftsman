import {Component, OnInit} from '@angular/core';
import {CraftsmenResourceService} from '../../rest/resources/craftsmen-resource/craftsmen-resource.service';
import {ICraftsman} from '../../rest/resources/craftsmen-resource/craftsman.interface';
import {ActivatedRoute} from '@angular/router';
import {IHttpError} from '../../rest/http/http-error.interface';

@Component({
  selector: 'app-craftsmen-list',
  templateUrl: 'craftsmen-list.component.html'
})
export class CraftsmenListComponent implements OnInit {

  public craftsmen: ICraftsman[];

  constructor(private craftsmenService: CraftsmenResourceService) {}

  ngOnInit() {
    this.craftsmenService.getCraftsmen()
      .subscribe((response) => {
        this.craftsmen = response;
      }, (err: IHttpError) => console.log(err.userMessage));
  }
}
