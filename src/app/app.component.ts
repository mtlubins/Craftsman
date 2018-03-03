import {Component, OnInit} from '@angular/core';
import {CraftsmenResourceService} from './rest/resources/craftsmen-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private craftsmenService: CraftsmenResourceService) {}
  title = 'app';
  ngOnInit() {
    this.craftsmenService.getCraftsmen()
      .subscribe(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
