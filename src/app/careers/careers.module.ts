import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { OurCultureComponent } from './our-culture-mobile/our-culture.component';
import { SharedModule } from './../shared/shared.module';
import { MatIconModule } from '@angular/material';
import { OurCultureDesktopComponent } from './our-culture-desktop/our-culture-desktop.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offer/offer.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { RouterModule } from '@angular/router';
import { IntroBannerComponent } from './intro-banner/intro-banner.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxGalleryModule } from 'ngx-gallery';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    RouterModule,
    NgxCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxGalleryModule,
    RecaptchaModule.forRoot()
  ],
  declarations: [CareersComponent, OurCultureComponent, OurCultureDesktopComponent, OffersComponent, OfferComponent, OfferDetailComponent, IntroBannerComponent, ImageGalleryComponent]
})
export class CareersModule { }
