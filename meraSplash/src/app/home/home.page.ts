import { Component, OnInit } from '@angular/core';


import { NetworkInterface } from '@ionic-native/network-interface/ngx';
// ionic cordova plugin add cordova-plugin-networkinterface
// npm install @ionic-native/network-interface
//there is error for cordova not exist in browser then run below
// ionic cordova platform add browser
//ionic cordova run browser
// https://forum.ionicframework.com/t/uncaught-in-promise-cordova-not-available-problem-why/122171/2

import { Geolocation } from '@ionic-native/geolocation/ngx';


import { Network } from '@ionic-native/network/ngx';
// ionic cordova plugin add cordova-plugin-network-information
// npm install @ionic-native/network


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: string;
  password: string;
  data=[]

  myphoto: any;
  qrData = null;
  createdCode = null;
  scannedCode = null;

  showSplash: boolean = true

  constructor(private networkInterface: NetworkInterface,private geolocation: Geolocation,private network: Network){

    console.log('Constructor')
console.log('Down Link Max: '+this.network.downlinkMax)
console.log('Network type: '+this.network.type)


    this.networkInterface.getWiFiIPAddress().then((address)=>{
      console.log('This is getWiFiIPAddress address: ' +address)
    }).catch(error=>{
      console.log('Error: ')
      console.log(error)
    })
    this.networkInterface.getCarrierIPAddress().then((address)=>{
      console.log('This is getCarrierIPAddress address: ' +address)
    }).catch(error=>{
      console.log('Error: ')
      console.log(error)
    })


    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('Current Location')
      console.log('lat: '+resp.coords.latitude)
      console.log('long: '+resp.coords.longitude)
     }).catch((error) => {
       console.log('Error getting location', error);
     });

/*      Current Location
 lat: 28.606280599999998
 long: 28.606280599999998 */

 /* Current Location
lat: 28.606280599999998
long: 77.2161637
This is getWiFiIPAddress address: 172.16.22.173 */



  }

  login() {

    if (this.email == '' || this.password == '' || this.email == undefined || this.password == undefined) {
      // this.toastProvider.presentToast("Please enter Email and Password.")
      alert('Please Enter Email and Password')
    }
    else {
      var json = "{\"userLoginId\":\"" + this.email + "\",\"password\":\"" + this.password + "\"}";
      // this.loadingProvider.presentLoadingDefault();
      
/*       this.httpProvider.postMethod("user/login", JSON.parse(json)).subscribe((data) => {
        if (data.status == 'SUCCESS') {
          // this.navCtrl.push(AdminPage);
          // go to admin page
          localStorage.setItem('userId', data.data[0].thuHid.trim());
          console.log(localStorage.getItem('userId'));
        }
        else {
          // this.toastProvider.presentToast(data.message);
          alert('data.message')
          localStorage.clear();
          // this.navCtrl.push(AdminPage);
        }
      }, err => {
        console.log("test" + err);
        localStorage.setItem('userId', undefined);
        //this.presentToast("Some Error Occurred. Please Try Again.");
        // this.navCtrl.push(AdminPage);   
      }, () => {
        // this.loadingProvider.dismissLoading();
      }); */
    }
  }

  ngOnInit() {
    setTimeout(() => { this.showSplash = false }, 3000)
  }
}
