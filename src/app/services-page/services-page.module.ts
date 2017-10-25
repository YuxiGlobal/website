import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { ServicesIntroComponent } from './services-intro/services-intro.component';
import { ServicesItemsComponent } from './services-items/services-items.component';
import { ServicesAdvantagesComponent } from './services-advantages/services-advantages.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule
  ],
  declarations: [ServicesPageComponent, ServicesIntroComponent, ServicesItemsComponent, ServicesAdvantagesComponent, ProgrammingLanguagesComponent, WhoWeAreComponent],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
