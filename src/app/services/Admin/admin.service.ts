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


  constructor(private http: HttpClient,private loginService:LoginServiceService) { }

  getAllCompanies() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  console.log(this.loginService.token)
    return this.http.get('http://localhost:5000/admin/getAllCompanies', {observe: 'response',responseType:'text',params} );
  }

  // getAllCustomers(): Observable<Customer[]> {
  //   return this.http.get<Customer[]>('http://localhost:5000/admin/getAllCustomers', {
  //     headers: this.headers, responseType: 'json', withCredentials: true, observe: 'response' as 'body'
  //   }).pipe(catchError(err => this.handleError(err)));
  // }


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
