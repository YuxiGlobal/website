import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-intro',
  templateUrl: './services-intro.component.html',
  styleUrls: ['./services-intro.component.scss']
})
export class ServicesIntroComponent implements OnInit {
  play = true;
  constructor() { }

  ngOnInit() {
  }

  playVideo() {
    this.play = !this.play;
  }
}
