import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service'

@Component({
  selector: 'app-restgetpost',
  templateUrl: './restgetpost.page.html',
  styleUrls: ['./restgetpost.page.scss'],
})
export class RESTGETPOSTPage implements OnInit {
  users: any;

  constructor(public restProvider: RestApiService) {
    console.log('Constructor')
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
      .then(
        data => {
          this.users = data;
          //console.log(this.users);
        }
      );
  }


  ngOnInit() {
  }

}
