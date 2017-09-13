import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from 'app/shared/shared.module';
import { HomeModule } from './home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { ServicesModule } from './services/services.module';
import { ServicesComponent } from './home/services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
