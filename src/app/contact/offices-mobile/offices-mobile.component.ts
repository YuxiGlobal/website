import { Component, OnInit, Input } from '@angular/core';
import { IContactInfo } from 'app/shared/icontact-info';

@Component({
  selector: 'app-offices-mobile',
  templateUrl: './offices-mobile.component.html',
  styleUrls: ['./offices-mobile.component.scss']
})
export class OfficesMobileComponent  {
  hideImageMed = false;
  hideImageArmenia = false;
  hideImageMason = false;
  @Input() info: IContactInfo;
  constructor() { }

  toggleHideImageMed() {
    this.hideImageMed = !this.hideImageMed;
  }
  toggleHideImageArmenia() {
    this.hideImageArmenia = !this.hideImageArmenia;
  }
  toggleHideImageMason() {
    this.hideImageMason = !this.hideImageMason;
  }
}
