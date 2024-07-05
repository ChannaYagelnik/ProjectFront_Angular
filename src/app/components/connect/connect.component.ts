import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/services/advertiser.service';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  email:string;
  password:string;  
  constructor(public appS:AdvertiserService, public router:Router) { }

  ngOnInit() {
  }
  send(){
    debugger
    this.appS.getByEmailPass(this.email, this.password).subscribe(res=>{ 
      this.appS.currentAdvertiser = res
      if(this.appS.currentAdvertiser.firstName != "Not connected"){
        this.appS.isConnected = true; 
        this.router.navigate(['/myHome'])
      }
    });
   
    //navigate to home page
  }

}
