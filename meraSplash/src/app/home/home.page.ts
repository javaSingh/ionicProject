import { Component, OnInit } from '@angular/core';

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
