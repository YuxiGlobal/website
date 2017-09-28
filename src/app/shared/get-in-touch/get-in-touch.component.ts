import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  @Output() toggleGetInTouchOverlay = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeOverlay() {
    this.toggleGetInTouchOverlay.emit();
  }

}
