import { IContactInfo } from './../../shared/icontact-info';
import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO } from 'app/shared/website-info';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent {
  hideImage = false;
  contactInfo: IContactInfo[];
  constructor() {
    this.contactInfo = CONTACT_INFO;
   }

  toggleHideImage() {
    this.hideImage = !this.hideImage;
  }
}
