import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'app/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { MenuComponent } from './menu/menu.component';
import { NavScrollingDirective } from './nav-scrolling.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    ButtonComponent,
    BurgerMenuComponent,
    MenuComponent,
    NavScrollingDirective
  ],
  exports: [
    NavBarComponent,
    ButtonComponent,
    FooterComponent,
    NavScrollingDirective
  ]
})
export class SharedModule { }
