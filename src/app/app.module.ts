import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
