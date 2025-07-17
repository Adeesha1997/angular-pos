import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    App,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
