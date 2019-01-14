import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeEntryLoginComponent } from './time-entry-login/time-entry-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryLoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
