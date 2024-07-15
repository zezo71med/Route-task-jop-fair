import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { CustomersComponent } from './customers/customers/customers.component';


export const routes: Routes = [
  // { path:'',loadChildren: ()=>import('./customers/customers.module').then(module=>module.CustomersModule) },
  {path:'',component:CustomersComponent}
  
];

