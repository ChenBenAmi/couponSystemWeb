import { Customer } from './../models/customer';
import { AdminService } from './../services/Admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {

  private companies: Company[];
  private customers: Customer[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.loadCompanies();
    this.loadCustomers();
  }

  loadCompanies() {
    this.adminService.getAllCompanies().subscribe((response: any) => {
      this.companies = response.body;
      console.log(this.companies[0].email);
      console.log(response.body[0].companyName);
    }
    );
  }

  loadCustomers() {
    this.adminService.getAllCustomers().subscribe((response: any) => {
      this.customers = response.body;
      console.log(this.customers[0].customerName);
      console.log(response.body[0].id);
    }
    );
  }
}
