import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from './../shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { ServicesComponent } from './services/services.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import {MatButtonModule} from '@angular/material';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { AlliesComponent } from './allies/allies.component';
import { TestimonialBannerComponent } from './testimonial-banner/testimonial-banner.component';
import { NgxCarouselModule } from 'ngx-carousel';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    NgxCarouselModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [
    HomeComponent, 
    HomeBannerComponent, 
    ServicesComponent, 
    AdvantagesComponent,
    WhoWeAreComponent,
    AlliesComponent,
    TestimonialBannerComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
