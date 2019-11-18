import { Customer } from './../../models/customer';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../Login/login-service.service';
import { Income } from 'src/app/models/income';
import { CompanyToSave } from 'src/app/models/companyToSave';
import { Router } from '@angular/router';
import { CustomerToSave } from 'src/app/models/customerToSave';
@Injectable({
  providedIn: 'root'
})



export class AdminService {


  constructor(private http: HttpClient, private loginService: LoginServiceService,private router:Router) { }

  private companies: Company[];
  private customers: Customer[];
  private incomes:Income[];
  company:Company
  customer:Customer

  getCompanies() {
    return this.companies
  }

  getCustomers() {
    return this.customers
  }

  getIncomes() {
    return this.incomes
  }



  getAllCompanies() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    console.log(this.loginService.token)
    return this.http.get('http://localhost:5000/admin/getAllCompanies', { observe: 'response', responseType: 'text', params }).subscribe((response: any) => {
      this.companies = JSON.parse(response.body)
      console.log(this.companies)
    }
    );
  }


  getCompany(id: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('companyId', id.toString())
    return this.http.get('http://localhost:5000/admin/getCompany', {
      observe: 'response', responseType: 'text', params
    })
  }

  addCompany(company: CompanyToSave) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.post('http://localhost:5000/admin/addCompany',company, {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      console.log(JSON.parse(response.body))
      this.router.navigate(['/admin']);
    }
    );
  }

  deleteCompany(companyId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('companyId', companyId.toString())
    return this.http.delete('http://localhost:5000/admin/deleteCompany', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.getAllCompanies()  
    }
    );
  }

  updateCompany(company: Company) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.put('http://localhost:5000/admin/updateCompany',company, {
      observe: 'response', responseType: 'text', params
    }).subscribe((response:any) =>{
      this.router.navigate(['/admin'])
    }
    )
  }

  getAllCustomers() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/admin/getAllCustomers', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.customers = JSON.parse(response.body)
      console.log(this.customers)
    })
  }


  getCustomer(id: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('customerId', id.toString())
    return this.http.get('http://localhost:5000/admin/getCustomer', {
      observe: 'response', responseType: 'text', params
    })
  }
  addCustomer(customer: CustomerToSave) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.post('http://localhost:5000/admin/addCustomer',customer ,{
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      console.log(JSON.parse(response.body))
      this.router.navigate(['/admin']);
    }
    );
  }

  deleteCustomer(customerId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('customerId', customerId.toString())
    return this.http.delete('http://localhost:5000/admin/deleteCustomer', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.getAllCustomers()  
    }
    );
  }

  updateCustomer(customer: Customer) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.put('http://localhost:5000/admin/updateCustomer',customer, {
      observe: 'response', responseType: 'text', params
    }).subscribe((response:any) =>{
      this.router.navigate(['/admin'])
    }
    )
  }


  viewAllIncome() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/admin/viewAllIncome', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.incomes = JSON.parse(response.body)
      console.log(this.incomes)
    }
    );
  }
  viewIncomeByCustomer(customerId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('customerId', customerId.toString())
    return this.http.get('http://localhost:5000/admin/viewIncomeByCustomer', {
      observe: 'response', responseType: 'text', params
    })
  }
  viewIncomeByCompany(companyId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('companyId', companyId.toString())
    return this.http.get('http://localhost:5000/admin/viewIncomeByCompany', {
      observe: 'response', responseType: 'text', params
    })
  }



}
