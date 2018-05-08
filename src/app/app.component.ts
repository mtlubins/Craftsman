import {Component, DoCheck, OnInit} from '@angular/core';
import {JwtStorageService} from './shared/storage/jwt-storage.service';
import {Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public hideElements: boolean;
  constructor(private jwtService: JwtStorageService, private router: Router) {
    const differentDisplayUrlList: string[] = [
      'login', 'join-us'
    ];
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(() => {
        this.hideElements = Boolean(differentDisplayUrlList.find(element => router.url.substring(1).indexOf(element) > -1));
      });
  }

  ngOnInit() {
    // console.log(this.router.url.substring(1));
  }
}
