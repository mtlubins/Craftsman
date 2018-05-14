import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-field-validator',
  styles: [`
    .field-error {
      color: #c80303;
      font-size: 14px;
      font-weight: 400;
      padding-top: 5px;
    }
  `],
  template: `
    <div class="field-error">
      <div *ngFor="let err of errors | mapToIterable">{{err | mapErrors}}</div>
    </div>
  `
})
export class FieldValidatorComponent {
  @Input() errors: Object;
}

