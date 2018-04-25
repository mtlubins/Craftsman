import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-validator',
  templateUrl: './field-validator.component.html',
  styleUrls: ['./field-validator.component.scss']
})
export class FieldValidatorComponent {
  @Input() errors: Object;
}

