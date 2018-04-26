import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class FieldValidationService {

  cantTouchTheForm(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      this.cantTouchTheField(form, field);
    });
  }

  cantTouchTheField(formName: FormGroup, fieldName: string) {
    this.cantTouchTheControl(formName.controls[fieldName]);
  }

  cantTouchThis(controlName: FormControl) {
    return controlName.dirty || controlName.touched;
  }

  cantTouchTheControl(controlName: FormControl | AbstractControl) {
    controlName.markAsTouched();
    controlName.markAsDirty();
  }
}
