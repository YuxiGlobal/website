import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContactComponent, ContactHeroComponent]
})
export class ContactModule { }
