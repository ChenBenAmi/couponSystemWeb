import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreateCompanyComponent } from './admin/CreateCompany/createCompany.component';
import { CreateCustomerComponent } from './admin/CreateCustomer/createCustomerComponent.component';
import { UpdateCompanyComponent } from './admin/UpdateCompany/updateCompanyComponent.component';
import { UpdateCustomerComponent } from './admin/UpdateCustomer/updateCustomerComponent.component';

const routes: Routes = [{
  path: 'login', component: LoginComponent
  },
  {path: 'admin', component: AdminComponent
  },
  {path: 'company', component: CompanyComponent
},
{path: 'customer', component: CustomerComponent
  },
  {path: 'admin/createCompany',component:CreateCompanyComponent},
  {path: 'admin/createCustomer',component:CreateCustomerComponent},
  {path:'admin/updateCompany' ,component:UpdateCompanyComponent},
  {path:'admin/updateCustomer' ,component:UpdateCustomerComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
