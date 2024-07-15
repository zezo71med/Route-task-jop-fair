import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private _http: HttpClient) { }
  getCustomers() {
    const url = './../../assets/data/customers.json';
    return this._http.get(url)
   
  }
}
