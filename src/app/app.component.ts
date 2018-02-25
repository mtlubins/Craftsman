import {Component, OnInit} from '@angular/core';
import {Environment} from './api.environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    // let env = new Environment();
    // let envGet: string = env.apiPath();
  }
}
