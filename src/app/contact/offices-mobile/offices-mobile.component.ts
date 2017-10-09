import { Component, OnInit, Input } from '@angular/core';
import { IContactInfo } from 'app/shared/icontact-info';

@Component({
  selector: 'app-offices-mobile',
  templateUrl: './offices-mobile.component.html',
  styleUrls: ['./offices-mobile.component.scss']
})
export class OfficesMobileComponent  {
  hideImage = false;
  @Input() info: IContactInfo;
  constructor() { }

  toggleHideImage() {
    this.hideImage = !this.hideImage;
  }
}
