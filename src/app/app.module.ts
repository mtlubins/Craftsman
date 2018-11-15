import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RestLayerModule} from './rest/rest-layer.module';
import {SharedModule} from './shared/shared.module';
import {AppRouterModule} from './app.routing';
import {UserAccountModule} from './my-account/user-account.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng6-toastr';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RestLayerModule,
    SharedModule,
    UserAccountModule,
    ToastModule.forRoot(),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
