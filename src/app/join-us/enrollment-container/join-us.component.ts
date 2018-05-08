import {Component, OnInit, ViewChild} from '@angular/core';
import {EnrollmentMode} from '../enrollment-mode';

@Component({
  template: `
    <div [ngSwitch]="enrollmentMode">
      <app-enrollment-mode #enrollmentComponent *ngSwitchCase="modeChoose"
                           (evtChangeEnrollMode$)="handleEnrollMode($event)"></app-enrollment-mode>
      <app-user-enrollment #enrollmentComponent *ngSwitchCase="modeUserEnrollment"></app-user-enrollment>
      <app-craftsman-enrollment #enrollmentComponent *ngSwitchCase="modeCraftsmanEnrollment"></app-craftsman-enrollment>
    </div>
  `
})
export class JoinUsComponent implements OnInit {

  @ViewChild('enrollmentComponent') enrollmentComponent;
  public enrollmentMode: EnrollmentMode;

  ngOnInit() {
    this.enrollmentMode = EnrollmentMode.choose;
  }

  handleEnrollMode(evt) {
    this.enrollmentMode = evt;
  }

  get modeChoose(): number {
    return EnrollmentMode.choose;
  }

  get modeUserEnrollment(): number {
    return EnrollmentMode.userEnrollment;
  }

  get modeCraftsmanEnrollment(): number {
    return EnrollmentMode.craftsmanEnrollment;
  }
}
