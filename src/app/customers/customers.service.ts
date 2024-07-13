import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _http:HttpClient) { }
getCustomers(){
  const url: string = './../../assets/json/customers.json';
  this._http.get(url).subscribe((response) => {
    return response;
  });
  return this._http.get('/assets/json/customers.json')
}
}
