import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coupon } from 'src/app/models/coupon';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }


  getCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>('http://localhost:8080/Coupon_System/rest/company/getCoupons', {
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
