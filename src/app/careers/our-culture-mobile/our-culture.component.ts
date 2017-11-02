import { Component, OnInit, Input } from '@angular/core';
import { IOurCultureInfo } from 'app/shared/iour-culture-info';

@Component({
  selector: 'app-our-culture',
  templateUrl: './our-culture.component.html',
  styleUrls: ['./our-culture.component.scss']
})
export class OurCultureComponent  {
  showInfo = false;
  @Input() info: IOurCultureInfo;
  constructor() { }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

}
