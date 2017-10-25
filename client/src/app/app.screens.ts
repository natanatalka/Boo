/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Folder_Blank_PhonePortrait } from '../pages/Folder/Blank/PhonePortrait/Blank';
import { Box_PhonePortrait } from '../pages/Box/PhonePortrait/Box';
import { Cat_PhonePortrait } from '../pages/Cat/PhonePortrait/Cat';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Folder_Blank_PhonePortrait,
    Box_PhonePortrait,
    Cat_PhonePortrait
  ];
  static mapping = {
    'Folder_Blank': {
      PhonePortrait: Folder_Blank_PhonePortrait
    },
    'Box': {
      PhonePortrait: Box_PhonePortrait
    },
    'Cat': {
      PhonePortrait: Cat_PhonePortrait
    }
  }
}