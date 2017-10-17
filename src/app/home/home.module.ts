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


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [HomeComponent, HomeBannerComponent, ServicesComponent, AdvantagesComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
