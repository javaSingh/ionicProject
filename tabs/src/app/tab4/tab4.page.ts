import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  input: string = ''
  storedValue: string = ''

  constructor(public storage: Storage, public navCtrl:NavController) {
    console.log('tab 4 const')
    // this.storedValue=storage.get('inputValue')
    this.storage.get('inputValue').then((getValue) => {
      this.storedValue = getValue
    })

  } 

  saveButtonOnClickFun() {
    // console.log('Save Button Clicked')
    this.storage.set("inputValue", this.input)
    this.storedValue = this.input
    this.navCtrl.navigateForward('tabs/tab3')
    this.navCtrl.

  }
}
