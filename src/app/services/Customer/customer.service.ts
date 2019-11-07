import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../Login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient,private loginService:LoginServiceService) { }


   
  purchaseCoupon(couponId:number) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('couponId',couponId.toString())
    return this.http.put('http://localhost:5000/customer/purchaseCoupon',  {
      observe: 'response',responseType:'text',params
    })
  }

  history() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/customer/history',  {
      observe: 'response',responseType:'text',params
    })
  }


  getHistoryByType(couponType:CouponType) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('couponType',couponType.toString())
    return this.http.get('http://localhost:5000/customer/getHistoryByType',  {
      observe: 'response',responseType:'text',params
    })
  }
  getHistoryByPrice(price:number) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('price',price.toString())
    return this.http.get('http://localhost:5000/customer/getHistoryByPrice',  {
      observe: 'response',responseType:'text',params
    })
  }
  viewIncome() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/customer/viewIncome',  {
      observe: 'response',responseType:'text',params
    })
  }


  


}
