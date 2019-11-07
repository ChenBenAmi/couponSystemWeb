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

  
  private result: Response;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllCompanies()
    this.adminService.getAllCustomers()
  }
  
}
