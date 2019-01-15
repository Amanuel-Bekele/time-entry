import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CalculatorModule} from './calculator/calculator.module';
import {ViewsModule} from './views/views.module';
import {ToolbarComponent} from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    ViewsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
