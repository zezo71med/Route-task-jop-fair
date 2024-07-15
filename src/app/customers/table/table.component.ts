import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() transactions:any = [];
  @Input() customers:any = [];

  getCustomerName(customer_id: number) {
    return this.customers.find((obj: any) => obj.id == customer_id).name
  }
}
