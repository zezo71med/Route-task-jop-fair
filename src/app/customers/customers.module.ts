import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],providers:[CustomersService]
})
export class CustomersModule { }
