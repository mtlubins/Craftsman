import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mapErrors'
})
export class MapErrorsPipe implements PipeTransform {
  errors = {
    required: 'Pole wymagane',
    email: 'Wprowadź poprawny email',
    pattern: 'Niewłaściwy format danych',
    equalPasswordRequired: 'Hasło nie pasuje',
    tooWeakPassword: 'Hasło powinno mieć przynajmniej jedną dużą i jedną małą literę, cyfrę oraz długość co najmniej 6 znaków'
  };
  transform(errorName) {
    return this.errors[errorName] ? this.errors[errorName] : errorName;
  }
}
