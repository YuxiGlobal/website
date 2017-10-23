import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  toggleForm = false;

  toggleArrow() {
    this.toggleForm = !this.toggleForm;
  }
  constructor() { }

  ngOnInit() {
  }

}
