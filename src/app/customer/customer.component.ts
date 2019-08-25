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
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.loadCoupons();
  }

  loadCoupons() {
    this.customerService.getCoupons().subscribe((response: any) => {
      this.coupons = response.body;
      console.log(this.coupons[0].id);
      console.log(this.coupons[0].title);
      console.log(response.body[0]);
    }
    );
  }
}

