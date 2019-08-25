import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }


  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/Coupon_System/rest/Customer/getCoupons  ', {
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
