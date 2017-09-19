import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { ServicesIntroComponent } from './services-intro/services-intro.component';
import { ServicesItemsComponent } from './services-items/services-items.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ServicesPageComponent, ServicesIntroComponent, ServicesItemsComponent],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
