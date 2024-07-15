import { Component } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer, Transaction } from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customerData: any;
  transactions: Transaction[] = [];
  customers: Customer[] = [];
  transactionsData: any;
  loding: boolean=true;
  filterTransactions: any;
  constructor(private CustomerService: CustomersService) {
    this.getAllCustomers()
  }
  getAllCustomers() {
    this.CustomerService.getCustomers().subscribe({
      next: (res: any) => {
        this.transactions = res.transactions
        this.customers = res.customers
        this.filterTransactions = res;

this.loding=false
      }
    })
  }
  selectedCustomer(custmoers_id:any){
    console.log('custmoers_id',custmoers_id);

  }
  applyFilter(filter: { customerId: number, minAmount: number }) {
    this.filterTransactions = this.transactions.filter(transaction => {
      return (!filter.customerId || transaction.customer_id === filter.customerId) &&
             (!filter.minAmount || transaction.amount >= filter.minAmount);
    });
  }
}
