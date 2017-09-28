import { NavigationService } from './services/navigation.service';
import { ShowOverlayService } from './services/show-overlay.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from 'app/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { MenuComponent } from './menu/menu.component';
import { NavScrollingDirective } from './nav-scrolling.directive';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { MatButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MdIconModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    ButtonComponent,
    BurgerMenuComponent,
    MenuComponent,
    NavScrollingDirective,
    GetInTouchComponent
  ],
  exports: [
    NavBarComponent,
    ButtonComponent,
    FooterComponent,
    GetInTouchComponent,
    NavScrollingDirective    
  ],
  providers: [ShowOverlayService, NavigationService]
})
export class SharedModule { }
