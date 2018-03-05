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


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MnFullpageModule.forRoot()
  ],
  declarations: [
    HomeComponent, 
    HomeBannerComponent, 
    ServicesComponent, 
    AdvantagesComponent,
    WhoWeAreComponent,
    AlliesComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
