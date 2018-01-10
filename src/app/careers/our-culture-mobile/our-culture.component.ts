import { Component, OnInit, Input } from '@angular/core';
import { IOurCultureInfo } from 'app/shared/iour-culture-info';

@Component({
  selector: 'app-our-culture',
  templateUrl: './our-culture.component.html',
  styleUrls: ['./our-culture.component.scss']
})
export class OurCultureComponent  {
  showEnvironmentInfo = false;
  showBenefitsInfo = false;
  showLifestyleInfo = false;

  @Input() info: IOurCultureInfo;
  constructor() { }

  toggleEnvironmentInfo() {
    this.showEnvironmentInfo = !this.showEnvironmentInfo;
  }

  toggleBenefitsInfo() {
    this.showBenefitsInfo = !this.showBenefitsInfo;
  }

  toggleLifestyleInfo() {
    this.showLifestyleInfo = !this.showLifestyleInfo;
  }

}
