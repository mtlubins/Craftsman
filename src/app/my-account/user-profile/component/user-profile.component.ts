import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AccountResourceService} from '../../../rest/resources/account-resource/account-resource.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userData: any;
  constructor(private route: ActivatedRoute,
              private accountService: AccountResourceService) {}

  ngOnInit() {
    // this.userData = this.route.snapshot.data['resolvedProfileData'];
    // console.log(this.userData);
    this.accountService.getProfile().subscribe(response => console.log(response), error => console.log(error) );
  }
}
