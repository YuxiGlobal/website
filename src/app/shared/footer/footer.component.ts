import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() switchOverlay = new EventEmitter();

  openGetInTouch() {
    this.switchOverlay.emit();
  }

  ngOnInit() {
  }

}
