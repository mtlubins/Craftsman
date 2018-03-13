import {Injectable} from '@angular/core';
import {LocaleStorageService} from './local-storage.service';

@Injectable()
export class JwtStorageService {

  constructor(private storage: LocaleStorageService) {}

  getToken() {
    return JSON.parse(this.storage.getItem('token'));
  }

  setToken(token) {
    this.storage.setItem('token', JSON.stringify(token));
  }

  removeToken() {
    this.storage.removeItem('token');
  }
}
