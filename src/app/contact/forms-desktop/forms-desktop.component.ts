import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-desktop',
  templateUrl: './forms-desktop.component.html',
  styleUrls: ['./forms-desktop.component.scss']
})
export class FormsDesktopComponent {

  selectedIndex = 0;

  tabChanged(event) {
    console.log(event);
    this.selectedIndex = event.index;
  }

}
