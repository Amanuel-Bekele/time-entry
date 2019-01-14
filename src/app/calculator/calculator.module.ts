import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { ADDComponent } from './add/add.component';

@NgModule({
  declarations: [CalculateComponent, ADDComponent],
  exports: [CalculateComponent],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
