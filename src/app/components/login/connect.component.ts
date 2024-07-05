import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/services/advertiser.service';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  languge: string = "ltr";  //default language is hebrew
  isHeb: boolean = false;
  email: string;
  password: string;
  constructor(public appS: AdvertiserService, public router: Router) { }

  ngOnInit() {
  }
  send() {
    debugger
    this.appS.getByEmailPass(this.email, this.password).subscribe(res => {
      this.appS.currentAdvertiser = res
      if (this.appS.currentAdvertiser.firstName != "Not connected") {
        this.appS.isConnected = true;
        this.router.navigate(['/myHome'])
      }
    });

    //navigate to home page
  }
  get lan() {
    if (this.isHeb == true) {
      this.languge = "rtl"
      return "עיברית"
    }
    else{
      this.languge = "rtl"
      return "אנגלית"
    }
  }

}
