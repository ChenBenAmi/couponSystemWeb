import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TrimPipe } from './pipes/trim.pipe';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './admin/companies/companies.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AdminService } from './services/Admin/admin.service';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TrimPipe,
    LoginComponent,
    AdminComponent,
    CompaniesComponent,
    CustomersComponent,
    CompanyComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'admin', component: AdminComponent },
          { path: 'company', component: AdminComponent },
          { path: 'customer', component: AdminComponent }
        ]
      },
    ])
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
