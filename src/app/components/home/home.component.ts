import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { appartment } from 'src/app/classes/appartment';
import { AdvertiserService } from 'src/app/services/advertiser.service';
import { AppartmentService } from 'src/app/services/appartment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _seachCity:string;
  _searchPerson_fn:string;
  _searchPerson_ln:string;
  _searchPriceMin:number;
  _searchPriceMax:number;
  firstNameOfAdvertiser:string;
  lastNameOfAdvertiser:string;

  constructor(public appS:AppartmentService, public appS_advertiser:AdvertiserService) { }
  ngOnInit() {
    this.appS.getAll().subscribe(a => this.appS.arrAppartments = a);
  }
  seachCity(cityInput){
    debugger;
    this.appS.getByCity(cityInput).subscribe(a => this.appS.arrAppartments = a);  
  }
  seachPerson(fNameInput, lNameInput){
    this.appS.getByPerson(fNameInput, lNameInput).subscribe(a => this.appS.arrAppartments = a);  
  }
  searchPrice(startPrice, endPrice){
    this.appS.getByPrice(startPrice, endPrice).subscribe(a => this.appS.arrAppartments = a);   
  }

  getAdvertiserName(id){
    this.appS_advertiser.getById(id).subscribe(a => {this.firstNameOfAdvertiser = a.firstName; this.lastNameOfAdvertiser = a.lastName});   
  }
}
