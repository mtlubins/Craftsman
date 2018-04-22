import {Component, OnInit} from '@angular/core';
import {JwtStorageService} from './shared/storage/jwt-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // console.log(window.atob(accessToken));

  constructor(private jwtService: JwtStorageService) {}

  ngOnInit() {
    // const accessToken = this.jwtService.getToken();
    // const nowadays = Math.trunc(Date.now() / 1000);
    // console.log(this.parseJwt(accessToken).exp > nowadays);
  }

  // parseJwt(token) {
  //   let base64Url = token.split('.')[1];
  //   console.log(base64Url);
  //   let base64 = base64Url.replace('-', '+').replace('_', '/');
  //   console.log(base64);
  //   return JSON.parse(atob(base64));
  // }
}
