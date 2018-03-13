import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestLayerModule} from './rest/rest-layer.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRouterModule} from './app.routing';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,

    BrowserModule,
    RouterModule,

    RestLayerModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
