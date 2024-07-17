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
  loding: boolean = true;
  filterTransactions: any;
  visible: boolean = false;
  custmerSelected: any;
  totalTransactionAmontForCustomer: any;
  constructor(private CustomerService: CustomersService) {
    this.getAllCustomers()
  }
  getAllCustomers() {
    this.CustomerService.getCustomers().subscribe({
      next: (res: any) => {
        this.transactions = res.transactions
        this.customers = res.customers
        this.filterTransactions = res;

        this.loding = false
      }
    })
  }
  selectedCustomer(custmoers: any) {
    this.visible = true;
    this.custmerSelected = custmoers
    this.getTotalTransactionAmontForCustomer(custmoers.customer_id)
    this.displayGraph()
  }
  applyFilter(filter: { customerId: number, minAmount: number }) {
    this.filterTransactions = this.transactions.filter(transaction => {
      return (!filter.customerId || transaction.customer_id === filter.customerId) &&
        (!filter.minAmount || transaction.amount >= filter.minAmount);
    });
  }
  getTotalTransactionAmontForCustomer(customerId: number) {
    this.totalTransactionAmontForCustomer = this.filterTransactions.transactions.filter((obj: any) => obj.customer_id === customerId);
    console.log('totalTransactionAmontForCustomer',this.totalTransactionAmontForCustomer);
    
  }
  displayGraph(){

  }
}
