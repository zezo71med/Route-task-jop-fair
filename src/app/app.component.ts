import { Component } from '@angular/core';
import { ChartComponent } from './customers/chart/chart.component';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomersModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
constructor(){
}
}
