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
import { CreateCompanyComponent } from './admin/CreateCompany/createCompany.component';
import { UpdateCustomerComponent } from './admin/UpdateCustomer/updateCustomerComponent.component';
import { UpdateCompanyComponent } from './admin/UpdateCompany/updateCompanyComponent.component';
import {CreateCustomerComponent } from './admin/CreateCustomer/createCustomerComponent.component';
import { AdminService } from './services/Admin/admin.service';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TrimPipe,
    LoginComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    CreateCompanyComponent,
    UpdateCustomerComponent,
    UpdateCompanyComponent,
    CreateCustomerComponent
  ],
  imports: [
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'admin', component: AdminComponent },
          { path: 'company', component: AdminComponent },
          { path: 'customer', component: AdminComponent },
          {path: 'admin/createCompany',component:CreateCompanyComponent},
          {path: 'admin/createCustomer', component:CreateCustomerComponent},
          {path:'admin/updateCompany' ,component:UpdateCompanyComponent},
          {path:'admin/updateCustomer' ,component:UpdateCustomerComponent},
        ]
      },
    ])
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));