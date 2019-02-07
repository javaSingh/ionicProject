import { Component } from '@angular/core';
// import {MatTooltipModule} from '@angul';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public matTooltipModule: MatTooltipModule){
  
    console.log('CONST')
  }

}
