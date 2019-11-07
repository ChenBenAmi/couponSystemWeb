import { CompanyService } from './../services/Company/company.service';
import { Coupon } from './../models/coupon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  private coupons: Coupon[];
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.loadCoupons();
  }

  loadCoupons() {
    this.companyService.getAllCoupon().subscribe((response: any) => {
      this.coupons = response.body;
      console.log(this.coupons[0].id);
      console.log(this.coupons[0].title);
      console.log(response.body[0]);
    }
    );
  }
}
