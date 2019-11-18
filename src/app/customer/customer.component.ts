import { CustomerService } from './../services/Customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { Coupon } from '../models/coupon';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private coupons: Coupon[];
  private price:number
  private type='FOOD'
  private couponPriceSearch:boolean
  private couponTypeSearch:boolean
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCoupons()
    this.customerService.getAllHistory()
    this.customerService.viewIncome()
  }


  purchaseCoupon(coupon:Coupon) {
    this.customerService.purchaseCoupon(coupon.id).subscribe((response:any) => {
      alert('Coupon purchased')
      this.customerService.getAllCoupons()
    },((error:any) => {
      alert(error.error)
    }))
    
  }
  getCouponsByPrice(price:number) {
  this.customerService.getHistoryByPrice(price)
  this.couponPriceSearch=true
  }

  getCouponsByType(type:string) {
    this.customerService.getHistoryByType(type)
    this.couponTypeSearch=true
  }

}

