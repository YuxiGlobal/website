import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './../services/navigation.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  open = false;
  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.open = this.navigationService.resetNav;
    });
  }

  ngOnInit() {
  }

}
