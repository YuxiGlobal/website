import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { OurCultureComponent } from './our-culture/our-culture.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CareersComponent, OurCultureComponent]
})
export class CareersModule { }
