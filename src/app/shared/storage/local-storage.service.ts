import {Injectable} from '@angular/core';
import {IStorageService} from './storage-service.interface';

@Injectable()
export class LocaleStorageService implements IStorageService {

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
