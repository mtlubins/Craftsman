import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountResourceService} from '../../../rest/resources/account-resource/account-resource.service';
import {ToastsManager} from 'ng6-toastr';
import {IHttpError} from '../../../rest/http/http-error.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userData: any;

  constructor(private userService: AccountResourceService,
              private toastr: ToastsManager,
              vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(
      response => this.userData = response,
      (err: IHttpError) => {
        this.toastr.error(err.userMessage, 'Ooops!');
      });
  }
}
