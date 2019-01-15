import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {CalculatorModule} from './calculator/calculator.module';
import {ViewsModule} from './views/views.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './views/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    ViewsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
