/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Folder_Blank_PhonePortrait } from '../pages/Folder/Blank/PhonePortrait/Blank';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Folder_Blank_PhonePortrait,
    Blank_PhonePortrait,
    Login_PhonePortrait
  ];
  static mapping = {
    'Folder_Blank': {
      PhonePortrait: Folder_Blank_PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    'Login': {
      PhonePortrait: Login_PhonePortrait
    }
  }
}