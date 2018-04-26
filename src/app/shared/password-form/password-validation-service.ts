import {Injectable} from '@angular/core';
import {passwordStrenght} from './password-strength';

@Injectable()
export class PasswordValidationService {
  private specialChar = /[!@#$%^&*() _+\-=\[\]{};':"\\|,.<>\/?0-9]/gi;
  private uppercaseChar = /[A-Z]/;
  private lowercaseChar = /[a-z]/;

  private countLength(passwordToCheck: string, minLength: number) {
    return passwordToCheck.length >= minLength;
  }

  private countSpecialChar(passwordToCheck: string, minSpecialCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.specialChar))
      .length >= minSpecialCharNumber;
  }

  private countUppercaseChar(passwordToCheck: string, minUppercaseCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.uppercaseChar))
      .length >= minUppercaseCharNumber;
  }

  private countLowercaseChar(passwordToCheck: string, minLowercaseCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.lowercaseChar))
      .length >= minLowercaseCharNumber;
  }

  public calculatePasswordStrength(password: string): number {
    if (this.countLength(password, 9)
        && this.countSpecialChar(password, 3)
        && this.countUppercaseChar(password, 1)
        && this.countLowercaseChar(password, 1)) {
      return passwordStrenght.strong;
     } else if ((this.countLength(password, 8)
          && this.countSpecialChar(password, 1)
          && this.countUppercaseChar(password, 1)
          && this.countLowercaseChar(password, 1))
        || ( this.countLength(password, 8)
          && this.countSpecialChar(password, 1)
          && this.countUppercaseChar(password, 1)
          && this.countLowercaseChar(password, 1)) ) {
      return passwordStrenght.good;
    } else if (this.countLength(password, 6)
      && this.countSpecialChar(password, 1)
      && this.countUppercaseChar(password, 1)) {
      return  passwordStrenght.weak;
    } else {
      return passwordStrenght.tooWeak;
    }
  }

}
