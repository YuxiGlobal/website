import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from './../shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { MnFullpageModule } from 'ngx-fullpage';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MnFullpageModule.forRoot() 
  ],
  declarations: [HomeComponent, HomeBannerComponent, ServicesComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
