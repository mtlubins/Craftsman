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

  public craftsmen: ICraftsman[] | IHttpError;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData: ICraftsman[] | IHttpError = this.route.snapshot.data['resolvedCraftsmen'];
    console.log(resolvedData);
    this.craftsmen = resolvedData;
  }
}
