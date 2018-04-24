import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class FieldValidationService {

  cantTouchTheForm(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      this.cantTouchTheField(form, field);
    });
  }

  cantTouchTheField(formName: FormGroup, fieldName: string) {
    formName.controls[fieldName].markAsTouched();
    formName.controls[fieldName].markAsDirty();
  }

  cantTouchThis(controlName: FormControl) {
    return controlName.dirty || controlName.touched;
  }
}
