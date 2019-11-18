import { Customer } from './../models/customer';
import { AdminService } from './../services/Admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Income } from '../models/income';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {


  private result: Response;
  constructor(private adminService: AdminService, private router: Router) { }
  private customerId: number
  private companyId: number
  private customerIncomeId: number
  private companyIncomeId: number
  private companySearch: boolean
  private customerSearch: boolean
  private customerIncomeSearch: boolean
  private companyIncomeSearch: boolean
  private income: Income = {
    id: 0, amount: 0, description: '', name: '', date: ''
  }
  private customer: Customer = {
    id: 0, customerName: '', password: ''
  }
  company: Company = {
    id: 0, companyName: '', password: '', email: ""
  }

  private customerIncome:Income[]
  private companyIncome:Income[]

  ngOnInit() {
    this.adminService.getAllCompanies()
    this.adminService.getAllCustomers()
    this.adminService.viewAllIncome()
  }

  createCompany() {
    this.router.navigate(['/admin/createCompany']);
  }
  createCustomer() {
    this.router.navigate(['/admin/createCustomer']);
  }
  deleteCompany(companyId: number) {
    console.log(companyId)
    this.adminService.deleteCompany(companyId)
  }

  deleteCustomer(companyId: number) {
    console.log(companyId)
    this.adminService.deleteCustomer(companyId)
  }

  getCompanyById(companyId: number) {
    this.adminService.getCompany(companyId).subscribe((response: any) => {
      console.log(JSON.parse(response.body))
      this.company = JSON.parse(response.body)
    })
    this.companySearch = true
  }
  getCustomerById(customerId: number) {
    this.adminService.getCustomer(customerId).subscribe((response: any) => {
      console.log(response.status)
      this.customer = JSON.parse(response.body)
      console.log(this.customer)
    })
    this.customerSearch = true
  }

  updateCompany(company: Company) {
    this.adminService.company = company
    this.router.navigate(['/admin/updateCompany'])
  }

  updateCustomer(customer: Customer) {
    this.adminService.customer = customer
    console.log(this.adminService.customer)
    this.router.navigate(['/admin/updateCustomer'])
  }

  getCustomerIncome(customerIncomeId: number) {
    this.adminService.viewIncomeByCustomer(customerIncomeId).subscribe((response:any) => {
      this.customerIncome=JSON.parse(response.body)
      console.log(this.customerIncome)
      this.customerIncomeSearch=true
    })
  }
  
  getCompanyIncome(companyIncomeId:number) {
    this.adminService.viewIncomeByCompany(companyIncomeId).subscribe((response:any) => {
      this.companyIncome=JSON.parse(response.body)
      console.log(this.companyIncome)
      this.companyIncomeSearch=true
    })
  }

}
