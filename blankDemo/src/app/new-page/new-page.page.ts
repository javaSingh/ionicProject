import { Events } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

/*   name1='Obj1'
  rate='100'


  list1=[{name:'kite',rate:'100'},
  {name:'TT',rate:'200'},
  {name:'Ball',rate:'300'},
 {name:'Swim Suit',rate:'400'},
  {name:'Bottle',rate:'500'} ];

  list=["a","B"];
  obj={abc:"one"};
 */
  DataNew = [
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "TT",
      rate: "100"
    },
    {
      name: "Carrom",
      rate: "200"
    },
    {
      name: "Bike",
      rate: "300"
    },
    {
      name: "Carrom",
      rate: "400"
    }
  ];


  constructor(public events1: Events) {

    this.events1.publish('DataNew', this.DataNew);
  }


  ngOnInit() {
  }

  unread(item){
    console.log(item)
  }

}
