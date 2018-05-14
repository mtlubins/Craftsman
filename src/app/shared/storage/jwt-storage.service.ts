import {Injectable} from '@angular/core';
import {LocaleStorageService} from './local-storage.service';

@Injectable()
export class JwtStorageService {

  constructor(private storage: LocaleStorageService) {}

  getToken() {
    return this.storage.getItem('token');
  }

  setToken(token) {
    this.storage.setItem('token', token);
  }

  removeToken() {
    this.storage.removeItem('token');
  }
}
