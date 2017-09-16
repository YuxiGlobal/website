import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicesPageComponent],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
