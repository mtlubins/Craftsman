import {Injectable} from '@angular/core';

@Injectable()
export class PasswordValidationService {
  private specialChar = /[!@#$%^&*() _+\-=\[\]{};':"\\|,.<>\/?0-9]/gi;
  private uppercaseChar = /[A-Z]/;
  private lowercaseChar = /[a-z]/;

  public checkPasswordLength(passwordToCheck: string, minLength: number) {
    return passwordToCheck.length >= minLength;
  }

  public checkPasswordSpecialChar(passwordToCheck: string, minSpecialCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.specialChar))
      .length >= minSpecialCharNumber;
  }

  public checkPasswordUppercaseChar(passwordToCheck: string, minUppercaseCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.uppercaseChar))
      .length >= minUppercaseCharNumber;
  }

  public checkPasswordLowercaseChar(passwordToCheck: string, minLowercaseCharNumber: number) {
    return passwordToCheck
      .split('')
      .filter(char => char.match(this.lowercaseChar))
      .length >= minLowercaseCharNumber;
  }
}
