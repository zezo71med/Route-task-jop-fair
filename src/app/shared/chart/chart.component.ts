import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.data = {
          labels: ['1-1', '2-1', '3-1', '4-1', '5-1'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Dataset 1',
                  data: [50, 25, 12, 48, 90]
              },
              {
                  type: 'bar',
                  label: 'Dataset 2',
                  data: [21, 84, 24, 75, 37]
              },
              {
                  type: 'bar',
                  label: 'Dataset 3',
                  data: [41, 52, 24, 74, 23]
              } ,
              {
                  type: 'bar',
                  label: 'Dataset 4',
                  data: [52, 52, 52, 52, 52]
              }
          ]
      };

     
  }
}
