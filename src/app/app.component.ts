import {Component, OnInit} from '@angular/core';
import {CraftsmenResourceService} from './rest/resources/craftsmen-resource/craftsmen-resource.service';
import {IHttpError} from './rest/http/http-error.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( private testErrorsService: CraftsmenResourceService) {}

  ngOnInit() {}

  getError() {
    this.testErrorsService.getError()
      .subscribe(
        (res) => {
          console.log('response');
          console.log(res);
        },
        (err: IHttpError) => {
          console.log('err');
          console.log(err.userMessage);
        }
      );
  }
}
