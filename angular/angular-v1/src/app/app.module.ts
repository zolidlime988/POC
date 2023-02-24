import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestSvcOneComponent } from './test-svc-one/test-svc-one.component';
import { TestDefaultComponentComponent } from './test-default-component/test-default-component.component';
import { HomeV1Component } from './home-v1/home-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSvcOneComponent,
    TestDefaultComponentComponent,
    HomeV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
