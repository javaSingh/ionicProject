import {Storage} from '@ionic/storage'
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  storedValue:string=''

  constructor(public storage:Storage){

    this.storage.get('inputValue').then((getValue) => {
      this.storedValue = getValue
    })
  }

}
