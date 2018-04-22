import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CraftsmenListComponent} from './craftsmen-list/craftsmen-list.component';
import {CommonModule} from '@angular/common';
import {LocaleStorageService} from './storage/local-storage.service';
import {JwtStorageService} from './storage/jwt-storage.service';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ErrorOccurredComponent} from './error-occurred/error-occurred.component';
import {PipeDisplayObjects} from './pipes/display-objects.pipe';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  declarations : [LoginComponent, CraftsmenListComponent, HeaderComponent, ErrorOccurredComponent, PipeDisplayObjects, FooterComponent],
  exports: [LoginComponent, CraftsmenListComponent, HeaderComponent, ErrorOccurredComponent, PipeDisplayObjects, FooterComponent],
  providers: [LocaleStorageService, JwtStorageService]
})
export class SharedModule {
}
