import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'app/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    ButtonComponent,
    BurgerMenuComponent
  ],
  exports: [
    NavBarComponent,
    ButtonComponent,
    FooterComponent
  ]
})
export class SharedModule { }
