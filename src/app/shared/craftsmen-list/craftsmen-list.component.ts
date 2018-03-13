import {Component, OnInit} from '@angular/core';
import {CraftsmenResourceService} from '../../rest/resources/craftsmen-resource/craftsmen-resource.service';
import {ICraftsman} from '../../rest/resources/craftsmen-resource/craftsman.interface';

@Component({
  selector: 'app-craftsmen-list',
  templateUrl: 'craftsmen-list.component.html'
})
export class CraftsmenListComponent implements OnInit{

  public craftsmen: ICraftsman[];

  constructor(private craftsmenService: CraftsmenResourceService) {}

  ngOnInit() {
    this.craftsmenService.getCraftsmen()
      .subscribe(
        (response: ICraftsman[]) => {
          this.craftsmen = response;
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
