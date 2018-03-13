import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CraftsmenListComponent} from './craftsmen-list/craftsmen-list.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LocaleStorageService} from './storage/local-storage.service';
import {JwtStorageService} from './storage/jwt-storage.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations : [LoginComponent, CraftsmenListComponent],
  exports: [LoginComponent, CraftsmenListComponent],
  providers: [LocaleStorageService, JwtStorageService]
})
export class SharedModule {
}
