import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/services/advertiser.service';
import { AppartmentService } from 'src/app/services/appartment.service';

@Component({
  selector: 'app-add-appartment',
  templateUrl: './add-appartment.component.html',
  styleUrls: ['./add-appartment.component.css']
})
export class AddAppartmentComponent implements OnInit {

  constructor(public appS:AppartmentService, public apps_Advertiser:AdvertiserService, public router:Router) { }
  ngOnInit() {
  }
  send(){
    this.appS.appartment.idAdvertiser = this.apps_Advertiser.currentAdvertiser.id;
    this.appS.add(this.appS.appartment).subscribe(h => {this.router.navigate(['/myHome']); alert('Add Appartment successfully')});
  }

}
