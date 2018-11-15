import {Injectable} from '@angular/core';
import {LocaleStorageService} from './local-storage.service';
import {ILoggedUserData} from '../models/logged-user-data.interface';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class LoggedUserStorageService {
  constructor(private storageService: LocaleStorageService) {}

  private userDataSource = new BehaviorSubject<ILoggedUserData>(this.getUserData());
  public userData$: Observable<ILoggedUserData> = this.userDataSource.asObservable();

  setUserData(userData: any | ILoggedUserData) {
    this.userDataSource.next(userData);
    this.storageService.setItem('USER_DATA', userData);
  }

  getUserData(): any | ILoggedUserData {
    return this.storageService.getItem('USER_DATA');
  }

  removeUserData() {
    this.storageService.removeItem('USER_DATA');
    this.userDataSource.next(undefined);
  }
}
