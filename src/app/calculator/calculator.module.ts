import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateComponent } from './calculate/calculate.component';
import { ADDComponent } from './add/add.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [CalculateComponent, ADDComponent],
  exports: [CalculateComponent],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class CalculatorModule { }
