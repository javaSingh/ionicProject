import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {

    console.log('Hello RestServiceProvider Service');
    console.log(http.get('https://jsonplaceholder.typicode.com/users'))

  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


}
