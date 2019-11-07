import { Customer } from './../../models/customer';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../Login/login-service.service';
@Injectable({
  providedIn: 'root'
})



export class AdminService {


  constructor(private http: HttpClient, private loginService: LoginServiceService) { }

  private companies: Company[];
  private customers: Customer[];

  getCompanies() {
    return this.companies
  }

  getCustomers() {
    return this.customers
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

  addCompany(company: Company) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.post('http://localhost:5000/admin/addCompany', {
      observe: 'response', responseType: 'text', params, company
    })
  }

  deleteCompany(companyId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('companyId', companyId.toString())
    return this.http.delete('http://localhost:5000/admin/deleteCompany', {
      observe: 'response', responseType: 'text', params
    })
  }

  updateCompany(company: Company) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.put('http://localhost:5000/admin/updateCompany', {
      observe: 'response', responseType: 'text', params, company
    })
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

  addCustomer(customer: Customer) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.post('http://localhost:5000/admin/addCustomer', {
      observe: 'response', responseType: 'text', params, customer
    })
  }

  deleteCustomer(customerId: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('customerId', customerId.toString())
    return this.http.delete('http://localhost:5000/admin/deleteCustomer', {
      observe: 'response', responseType: 'text', params
    })
  }

  updateCustomer(customer: Customer) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.put('http://localhost:5000/admin/updateCustomer', {
      observe: 'response', responseType: 'text', params, customer
    })
  }


  viewAllIncome() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/admin/viewAllIncome', {
      observe: 'response', responseType: 'text', params
    })
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
