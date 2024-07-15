import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
    // data: any;
    @Input() allCustomer: any
    options: any;
    data: any = {
        labels: [],
        datasets: [
            {
                type: '',
                label: '',
                data: []
            },
        ]
    };
    constructor(private _http: HttpClient) {
        this.getAllCustomers()
    }
    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
    }

    displayGraph() {
        const uniqueTransactionsMap = new Map();

        this.allCustomer?.transactions.forEach((transaction:any) => {
            if (!uniqueTransactionsMap.has(transaction.date)) {
                uniqueTransactionsMap.set(transaction.date, transaction);
            }
        });

        const uniqueTransactions = Array.from(uniqueTransactionsMap.values());
        this.data.labels = uniqueTransactions.map((ele: any) => ele.date);

        this.data.datasets[0].data = uniqueTransactions.map((ele: any) => ele.amount);


    }
    
    getAllCustomers() {
        const url: string = './../assets/data/customers.json';
        this._http.get(url).subscribe((res: any) => {
            this.allCustomer = res;
            this.displayGraph();
        });
    }

    getTotalTransactionAmontForCustomer(customer_id: number) {
        let x = this.allCustomer?.transactions.filter((item: any) => (item.customer_id === customer_id));
        console.log(x);
    }
}
