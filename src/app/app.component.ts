import { Component } from '@angular/core';
import { ChartComponent } from './shared/chart/chart.component';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent,CustomersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
constructor(private _customerService:CustomersService,private _http:HttpClient){
  this.getAllCustomers()
}
  getAllCustomers() {
    const url: string = './../assets/json/customers.json';
    this._http.get(url).subscribe((res) => {
      console.log('customer;',res)    });
  
    }

}
