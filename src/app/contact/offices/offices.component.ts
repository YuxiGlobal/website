import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent {
  hideImage = false;
  constructor() { }

  toggleHideImage() {
    this.hideImage = !this.hideImage;
  }
}
