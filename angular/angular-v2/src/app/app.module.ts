import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { V1PageComponent } from './v1-page/v1-page.component';

import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    V1PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [{provide: APP_BASE_HREF, useValue: '/v2'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
