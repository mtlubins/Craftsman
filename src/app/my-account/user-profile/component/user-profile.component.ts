import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userData: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userData = this.route.snapshot.data['resolvedProfileData'];
    console.log(this.userData);
  }
}
