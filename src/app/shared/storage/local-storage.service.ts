import {Injectable} from '@angular/core';
import {IStorageService} from './storage-service.interface';

@Injectable()
export class LocaleStorageService implements IStorageService {

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
