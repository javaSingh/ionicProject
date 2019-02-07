import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatNativeDateModule} from '@angular/material';

import {TooltipsModule} from '../ionic-tooltips/src';

import {MatTooltipModule} from '@angular/material/tooltip';

import { HomePage } from './home.page';



@NgModule({
  imports: [
    MatNativeDateModule,
    MatTooltipModule,
    TooltipsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  tooltip(){
    console.log('hi')
  }
}
