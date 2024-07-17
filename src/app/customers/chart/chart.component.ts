import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrl: './chart.component.css'
})
export class ChartComponent implements OnChanges {
    // data: any;
    @Input() customer: any;

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
    }
  
    ngOnChanges(customer: SimpleChanges){
        
        this.displayGraph();
    }

    displayGraph() {
        const uniqueTransactionsMap = new Map();

        this.customer?.forEach((transaction:any) => {
            if (!uniqueTransactionsMap.has(transaction.date)) {
                uniqueTransactionsMap.set(transaction.date, transaction);
            }
        });

        const uniqueTransactions = Array.from(this.customer.values());
        this.data.labels = uniqueTransactions.map((ele: any) => ele.date);

        this.data.datasets[0].data = uniqueTransactions.map((ele: any) => ele.amount);


    }

}
