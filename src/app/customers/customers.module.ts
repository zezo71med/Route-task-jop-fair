import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { FilterComponent } from './filter/filter.component';
import { ChartModule } from 'primeng/chart';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableComponent,ChartComponent,FilterComponent,CustomersComponent],
  exports: [TableComponent,ChartComponent,FilterComponent,],
  imports: [
    CommonModule,
    TableModule,
    ChartModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule
  ],providers:[CustomersService]
})
export class CustomersModule { }
