import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  language = true;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkLanguage();
  }

  checkLanguage() {
    const spanish = this.el.nativeElement.querySelector(".spanish");  
    this.language = window.location.pathname.split("/").includes("es");
    console.log(this.language);
  }
}
