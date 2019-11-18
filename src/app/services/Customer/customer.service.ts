import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Coupon } from 'src/app/models/coupon';
import { catchError } from 'rxjs/operators';
import { LoginServiceService } from '../Login/login-service.service';
import { Income } from 'src/app/models/income';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient, private loginService: LoginServiceService) { }

  private coupons: Coupon[];
  private purchsedCoupons: Coupon[];
  private priceCoupons: Coupon[]
  private typeCoupons: Coupon[]
  private incomes:Income[]


  getTypeCoupons() {
    return this.typeCoupons
  }

  getPriceCoupons() {
    return this.priceCoupons
  }

  getPurchasedCoupons() {
    return this.purchsedCoupons
  }

  getCoupons() {
    return this.coupons
  }

  getIncomes() {
    return this.incomes
  }

  getAllCoupons() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/customer/getAllCoupons', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.coupons = JSON.parse(response.body)
    })
  }


  purchaseCoupon(couponId: number) {
    console.log(this.loginService.token)
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('couponId', couponId.toString())
    return this.http.get('http://localhost:5000/customer/purchaseCoupon', {
      observe: 'response', responseType: 'text', params
    })
  }

  getAllHistory() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/customer/getAllHistory', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.purchsedCoupons = JSON.parse(response.body)
    })
  }


  getHistoryByType(couponType: string) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('couponType', couponType)
    return this.http.get('http://localhost:5000/customer/getHistoryByType', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.typeCoupons=JSON.parse(response.body)
    })
  }
  getHistoryByPrice(price: number) {
    const params = new HttpParams()
      .set('token', this.loginService.token)
      .set('price', price.toString())
    return this.http.get('http://localhost:5000/customer/getHistoryByPrice', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response: any) => {
      this.priceCoupons = JSON.parse(response.body)
    })
  }
  viewIncome() {
    const params = new HttpParams()
      .set('token', this.loginService.token)
    return this.http.get('http://localhost:5000/customer/viewIncome', {
      observe: 'response', responseType: 'text', params
    }).subscribe((response:any) => {
      this.incomes=JSON.parse(response.body)
    })
  }





}
