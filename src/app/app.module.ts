import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestLayerModule} from './rest/rest-layer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, RestLayerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
