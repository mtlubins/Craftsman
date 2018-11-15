
import {filter} from 'rxjs/operators';
import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import {JwtStorageService} from './shared/storage/jwt-storage.service';
import {Router, NavigationEnd } from '@angular/router';
import {LoggedUserStorageService} from './shared/storage/logged-user-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  public hideElements: boolean;
  constructor(private  jwtStorage: JwtStorageService,
              private router: Router,
              private loggedUserDataService: LoggedUserStorageService,) {
    const differentDisplayUrlList: string[] = [
      'login'
    ];
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideElements = Boolean(differentDisplayUrlList.find(element => router.url.substring(1).indexOf(element) > -1));
      });
  }

  ngOnInit() {
    // console.log(this.router.url.substring(1));
  }

  ngOnDestroy() {
    this.jwtStorage.removeToken();
    this.loggedUserDataService.removeUserData();
  }
}
