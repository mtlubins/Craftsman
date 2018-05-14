import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../rest/auth/auth.service';
import {LoggedUserStorageService} from '../../storage/logged-user-storage.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public userData;
  constructor(private authService: AuthService,
              private loggedUserStorage: LoggedUserStorageService) {}
  ngOnInit() {
    this.loggedUserStorage.userData$
      .subscribe((response) => {
        this.userData = response;
        console.log(this.userData);
      });
  }
  logout() {
    this.authService.logout();
  }
}
