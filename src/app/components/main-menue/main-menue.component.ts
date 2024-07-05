import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-main-menue',
  templateUrl: './main-menue.component.html',
  styleUrls: ['./main-menue.component.css']
})
export class MainMenueComponent implements OnInit {
  
  constructor(public appS:AdvertiserService) { }

  ngOnInit() {
  }
  disconnected(){
    this.appS.isConnected = true;
  }

}
