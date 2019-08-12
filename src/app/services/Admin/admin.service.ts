import { Customer } from './../../models/customer';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    }).pipe(catchError(err => this.handleError(err)));
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:8080/Coupon_System/rest/admin/getCustomers', {
      headers: this.headers, responseType: 'json', withCredentials: true, observe: 'response' as 'body'
    }).pipe(catchError(err => this.handleError(err)));
  }


  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error: ', errorResponse.error.message);
      return throwError(errorResponse);
    } else {
      console.error('Server Side Error ', errorResponse);
      return throwError(errorResponse);
    }
    return throwError(errorResponse);
  }

}
