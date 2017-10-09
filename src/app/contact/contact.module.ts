import { OfficesMobileComponent } from './offices-mobile/offices-mobile.component';
import { OfficesDesktopComponent } from './offices-desktop/offices-desktop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';
import { SharedModule } from './../shared/shared.module';
import { OfficesComponent } from './offices/offices.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactComponent, 
    ContactHeroComponent, 
    OfficesComponent,
    OfficesMobileComponent,
    OfficesDesktopComponent
  ]
})
export class ContactModule { }
