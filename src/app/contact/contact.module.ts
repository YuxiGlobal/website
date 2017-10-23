import { OfficesMobileComponent } from './offices-mobile/offices-mobile.component';
import { OfficesDesktopComponent } from './offices-desktop/offices-desktop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactHeroComponent } from './contact-hero/contact-hero.component';
import { SharedModule } from './../shared/shared.module';
import { OfficesComponent } from './offices/offices.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { MatTabsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { BusinessFormComponent } from './business-form/business-form.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsMobileComponent } from './forms-mobile/forms-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ContactComponent,
    ContactHeroComponent,
    OfficesComponent,
    OfficesMobileComponent,
    OfficesDesktopComponent,
    ContactFormsComponent,
    BusinessFormComponent,
    GeneralFormComponent,
    FormsMobileComponent
  ]
})
export class ContactModule { }
