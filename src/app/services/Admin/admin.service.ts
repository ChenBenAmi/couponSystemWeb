import { Customer } from './../../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})



export class AdminService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('http://localhost:8080/Coupon_System/rest/admin/getCompanies', {
      headers: this.headers, responseType: 'json', withCredentials: true, observe: 'response' as 'body'
    });
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/Coupon_System/rest/admin/getCustomers', {
      headers: this.headers, responseType: 'json', withCredentials: true
    });
  }




}
