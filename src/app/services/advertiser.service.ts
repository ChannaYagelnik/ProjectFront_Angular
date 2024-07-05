import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { advertiser } from '../classes/advertiser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  url:string="http://localhost:8080/";

  constructor(public http:HttpClient) { }
  advertiser:advertiser = new advertiser();
  currentAdvertiser:advertiser = new advertiser(1, "Not connected", "Doe", "johndoe@example.com", "1234567");
  isConnected:boolean = false;  

  getAll():Observable<Array<advertiser>>{
    return this.http.get<Array<advertiser>>(`${this.url}advertiser`);
  }
  add(advertiser:advertiser){
    return this.http.post(`${this.url}advertiser`, advertiser);
  }
  getByEmailPass(email:string, pass:string):Observable<advertiser>{
    return this.http.get<advertiser>(`${this.url}advertiser/${email}/${pass}`);
  }
  
  getById(id:number):Observable<advertiser>{
    return this.http.get<advertiser>(`${this.url}advertiser/${id}`);
  }
}
