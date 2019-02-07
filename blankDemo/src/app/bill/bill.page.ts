import { Events } from '@ionic/angular';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import { Data } from '../providers/data'

@Component({
  selector: 'app-home',
  templateUrl: 'bill.page.html',
  styleUrls: ['bill.page.scss']
})
export class BillPage {



  name = ''
  email = ''
  mobile = ''
  myForm: any;
  submitAttempt = false
  DataNew: any



  constructor(public formBuilder: FormBuilder, public events2: Events) {
    this.events2.subscribe('my-message', this.DataNew)
    console.log('inside Const');
    this.myForm = formBuilder.group({
      myNameControl: ['', Validators.compose([Validators.minLength(1), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      myEmailControl: ['', Validators.compose([Validators.required])],
      myMobileControl: [''],
      myItemControl: ['']
    });
  }
  meraFun() {
    this.submitAttempt = true;
    console.log("Helo " + this.name + " . You have attempted submit. Kindly view below your details. 1 Email " + this.email + " 2. Mobile " + this.mobile);
    if (this.myForm.invalid) {
      console.log('Invalid Form')
    }
  }
}
