import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddDotZeroPipe} from './add-dot-zero.pipe';

@NgModule({
  declarations: [AddDotZeroPipe],
  exports: [AddDotZeroPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
