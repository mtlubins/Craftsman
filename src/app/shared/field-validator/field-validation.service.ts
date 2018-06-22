import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Injectable()
export class FieldValidationService {

  markFormAsTouched(form: FormGroup) {
    Object.keys(form.controls).forEach((field) => {
      this.markedOneFieldFromForm(form, field);
    });
  }

  markedOneFieldFromForm(formName: FormGroup, fieldName: string) {
    this.markedControlAsTouched(formName.controls[fieldName]);
  }

  isControlTouched(controlName: FormControl) {
    return controlName.dirty || controlName.touched;
  }

  markedControlAsTouched(controlName: FormControl | AbstractControl) {
    controlName.markAsTouched();
    controlName.markAsDirty();
  }
}
