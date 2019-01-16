import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {CalculatorModule} from './calculator/calculator.module';
import {ViewsModule} from './views/views.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {ServicesModule} from './services/services.module';
import { TimeEntryViewComponent } from './time-entry-view/time-entry-view.component';
import { TimeEntryItemComponent } from './time-entry-item/time-entry-item.component';
import {EntryService} from './entry.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TimeEntryViewComponent,
    TimeEntryItemComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule,
    ViewsModule,
    NgbModule,
    ServicesModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntryService],
  bootstrap: [AppComponent],
})
export class AppModule { }
