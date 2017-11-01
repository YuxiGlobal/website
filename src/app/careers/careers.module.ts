import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { OurCultureComponent } from './our-culture-mobile/our-culture.component';
import { SharedModule } from './../shared/shared.module';
import { MatIconModule } from '@angular/material';
import { OurCultureDesktopComponent } from './our-culture-desktop/our-culture-desktop.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule
  ],
  declarations: [CareersComponent, OurCultureComponent, OurCultureDesktopComponent, OffersComponent, OfferComponent]
})
export class CareersModule { }
