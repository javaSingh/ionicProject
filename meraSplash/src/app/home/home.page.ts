import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  showSplash:boolean=true

  ngOnInit(){
    setTimeout(()=>{this.showSplash=false},3000)
  }
}
