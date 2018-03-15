import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestLayerModule} from './rest/rest-layer.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRouterModule} from './app.routing';
import {UserAccountModule} from './my-account/user-account.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,

    BrowserModule,
    RouterModule,

    RestLayerModule,
    SharedModule,
    UserAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
