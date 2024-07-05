import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appartment } from '../classes/appartment';
@Injectable({
  providedIn: 'root'
})
export class AppartmentService {

  url:string="http://localhost:8080/";
  arrAppartments: Array<appartment>;
  appartment:appartment = new appartment();

  constructor(public http:HttpClient) { }
  
  getAll():Observable<Array<appartment>>{
    return this.http.get<Array<appartment>>(`${this.url}appartment`);
  }
  getByPerson(fn:string, ln:string):Observable<Array<appartment>>{
    return this.http.get<Array<appartment>>(`${this.url}appartment/id/${fn}/${ln}`);
  }
  getByCity(city:string):Observable<Array<appartment>>{
    return this.http.get<Array<appartment>>(`${this.url}appartment/city/${city}`);
  }
  getByPrice(startPrice:number, endPrice:number):Observable<Array<appartment>>{
    return this.http.get<Array<appartment>>(`${this.url}appartment/price/${startPrice}/${endPrice}`);
  }
  add(appartment:appartment):Observable<string>{
    return this.http.post<string>(`${this.url}appartment`, appartment);
  }
}
