import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../customers/table/table.component';
import { TableModule } from 'primeng/table';



@NgModule({
  // declarations: [TableComponent ,  ],
  // exports:      [TableComponent ,  ],
  imports: [
    CommonModule,
    // TableModule
  ]
})
export class SharedModule { }
