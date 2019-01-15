import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  declarations: [LoginComponent, ToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent]
})
export class ViewsModule { }
