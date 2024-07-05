import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdvertiserService } from 'src/app/services/advertiser.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  myFrm: FormGroup = new FormGroup({
    "id": new FormControl(null, [Validators.required]),
    "email": new FormControl(null, [Validators.required]),//, this.myEmailCheck.bind(this)]),// Validators.pattern("[a-zA-Z ]")]),,
    "firstName": new FormControl(null, [Validators.required]),
    "lastName": new FormControl(null, [Validators.required]),
    "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
    "phone": new FormControl(null, [Validators.required, Validators.pattern("[0-9]{9}")])
  })
  constructor(public appS: AdvertiserService, public router:Router) { }

  getId() {
    return this.myFrm.controls["id"];
  }
  getEmail() {
    return this.myFrm.controls["email"];
  }
  getFirstName() {
    return this.myFrm.controls["firstName"];
  } 
  getLastName() {
    return this.myFrm.controls["lastName"];
  } 
  getPassword() {
    return this.myFrm.controls["password"];
  }
  getPhone() {
    return this.myFrm.controls["phone"];
  } 
  ngOnInit() {
  }

  myEmailCheck(f: FormControl) {
    debugger;
    let email: string = f.value;
    if (email != null) {
      for (let i = 0; i < email.length; i++) {
        if (email[i] == "@") {
          return { "invalidEmail": true };
        }
      }
    }
    //this.getEmail().value;

    // if(email("@")){
    //   return {"invalidEmail": false};
    // }else{
    return { "invalidEmail": false };
    // }
  }

  send() {
    this.appS.add(this.appS.advertiser).subscribe(res => {debugger; this.router.navigate(['/myHome'])});
  }
}
