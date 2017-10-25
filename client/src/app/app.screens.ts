/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Folder_Blank_PhonePortrait } from '../pages/Folder/Blank/PhonePortrait/Blank';
import { Box_PhonePortrait } from '../pages/Box/PhonePortrait/Box';
import { Kitty_PhonePortrait } from '../pages/Kitty/PhonePortrait/Kitty';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Folder_Blank_PhonePortrait,
    Box_PhonePortrait,
    Kitty_PhonePortrait
  ];
  static mapping = {
    'Folder_Blank': {
      PhonePortrait: Folder_Blank_PhonePortrait
    },
    'Box': {
      PhonePortrait: Box_PhonePortrait
    },
    'Kitty': {
      PhonePortrait: Kitty_PhonePortrait
    }
  }
}