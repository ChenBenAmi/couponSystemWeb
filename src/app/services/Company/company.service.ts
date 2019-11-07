import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Coupon } from 'src/app/models/coupon';
import { Company } from 'src/app/models/company';
import { LoginServiceService } from '../Login/login-service.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,private loginService:LoginServiceService) { }


  
  createCoupon(coupon:Coupon) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.post('http://localhost:5000/company/createCoupon',  {
      observe: 'response',responseType:'text',params,coupon
    })
  }
  deleteCoupon(couponId:number) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('couponId',couponId.toString())
    return this.http.delete('http://localhost:5000/company/createCoupon',  {
      observe: 'response',responseType:'text',params
    })
  }
  updateCoupon(coupon:Coupon) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.put('http://localhost:5000/company/createCoupon',  {
      observe: 'response',responseType:'text',params,coupon
    })
  }
  getCompany() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/company/getCompany',  {
      observe: 'response',responseType:'text',params
    })
  }
  getAllCoupon() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/company/getAllCoupon',  {
      observe: 'response',responseType:'text',params
    })
  }

  getCouponByType(couponType:CouponType) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('couponType',couponType.toString())
    return this.http.get('http://localhost:5000/company/getCouponByType',  {
      observe: 'response',responseType:'text',params
    })
  }

  getCouponByPrice(price:number) {
    const params = new HttpParams()
    .set('price',price.toString())
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/company/getCouponByPrice',  {
      observe: 'response',responseType:'text',params
    })
  }
  getCouponByDate(date:Date) {
    const params = new HttpParams()
  .set('token', this.loginService.token )
  .set('localdatetime',date.toString())
    return this.http.get('http://localhost:5000/company/getCouponByDate',  {
      observe: 'response',responseType:'text',params
    })
  }
  viewIncome() {
    const params = new HttpParams()
  .set('token', this.loginService.token )
    return this.http.get('http://localhost:5000/company/viewIncome',  {
      observe: 'response',responseType:'text',params
    })
  }
  

}
