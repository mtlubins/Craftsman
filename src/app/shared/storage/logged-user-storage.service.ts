import {Injectable} from '@angular/core';
import {LocaleStorageService} from './local-storage.service';
import {ILoggedUserData} from '../models/logged-user-data.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class LoggedUserStorageService {
  constructor(private storageService: LocaleStorageService) {}

  private userDataSource = new BehaviorSubject<ILoggedUserData>(this.getUserData());
  public userData$: Observable<ILoggedUserData> = this.userDataSource.asObservable();

  setUserData(userData: ILoggedUserData) {
    this.userDataSource.next(userData);
    this.storageService.setItem('USER_DATA', userData);
  }
  getUserData(): ILoggedUserData {
    return this.storageService.getItem('USER_DATA');
  }
  removeUserData() {
    this.storageService.removeItem('USER_DATA');
    this.userDataSource.next(undefined);
  }
}
