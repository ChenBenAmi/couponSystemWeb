import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
  },
  {path: 'admin', component: AdminComponent
  },
  {path: 'company', component: CompanyComponent
},
{path: 'customer', component: CustomerComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
