import { Component, OnInit, Input } from '@angular/core';
import { IContactInfo } from 'app/shared/icontact-info';

@Component({
  selector: 'app-offices-desktop',
  templateUrl: './offices-desktop.component.html',
  styleUrls: ['./offices-desktop.component.scss']
})
export class OfficesDesktopComponent implements OnInit {
  @Input() info: IContactInfo;
  constructor() { }

  ngOnInit() {
  }

}
