import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  searchBoxTxt: any;

  @Input() transactions: any = [];
  @Input() customers: any = [];
  @Output() selectedCustomer= new EventEmitter()

  getCustomerName(customer_id: number) {
    return this.customers.find((obj: any) => obj.id == customer_id).name
  }

  showChart(customer_id:any){
    this.selectedCustomer.emit({
      customer_id:customer_id,
      customerName:this.getCustomerName(customer_id)
    });
  }
}
