import { Component, OnInit, Input } from '@angular/core';
import { IOurCultureInfo } from 'app/shared/iour-culture-info';
@Component({
  selector: 'app-our-culture-desktop',
  templateUrl: './our-culture-desktop.component.html',
  styleUrls: ['./our-culture-desktop.component.scss']
})
export class OurCultureDesktopComponent implements OnInit {
  showInfo = false;
  @Input() info: IOurCultureInfo;
  constructor() { }

  ngOnInit() {
  }

}
