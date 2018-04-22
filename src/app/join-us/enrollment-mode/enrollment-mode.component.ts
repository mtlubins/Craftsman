import {Component, EventEmitter, Output} from '@angular/core';
import {EnrollmentMode} from '../enrollment-mode';

@Component({
  selector: 'app-enrollment-mode',
  templateUrl: 'enrollment-mode.component.html',
  styleUrls: ['enrollment-mode.component.scss']
})
export class EnrollmentModeComponent {

  @Output() evtChangeEnrollMode$: EventEmitter<EnrollmentMode> = new EventEmitter<EnrollmentMode>();

  public enrollUser() {
    this.evtChangeEnrollMode$.emit(EnrollmentMode.userEnrollment);
  }

  public enrollCraftsman() {
    this.evtChangeEnrollMode$.emit(EnrollmentMode.craftsmanEnrollment);
  }
}
