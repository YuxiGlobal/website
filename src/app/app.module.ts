import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageModule } from './services-page/services-page.module';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactComponent } from 'app/contact/contact.component';
import { ContactModule } from 'app/contact/contact.module';
import { CareersComponent } from 'app/careers/careers.component';
import { CareersModule } from 'app/careers/careers.module';
import { OfferDetailComponent } from 'app/careers/offer-detail/offer-detail.component';
import { TermsPrivacyComponent } from 'app/shared/terms-privacy/terms-privacy.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:formType', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'careers/:id', component: OfferDetailComponent },
  { path: 'terms-privacy', component: TermsPrivacyComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    ServicesPageModule,
    ContactModule,
    CareersModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
