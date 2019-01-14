import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeEntryLoginComponent } from './time-entry-login/time-entry-login.component';
import {CalculatorModule} from './calculator/calculator.module';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryLoginComponent,
  ],
  imports: [
    BrowserModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
