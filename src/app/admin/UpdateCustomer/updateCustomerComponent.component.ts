import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { Router } from '@angular/router';
import { CustomerToSave } from 'src/app/models/customerToSave';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-updateCustomerComponent',
  templateUrl: './updateCustomerComponent.html',
  styleUrls: ['./updateCustomerComponent.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  }

  private customer:Customer=this.adminService.customer

  saveCustomer(customer:Customer) {
    if(this.customer.customerName!='' && this.customer.password!='') {
      this.adminService.updateCustomer(customer)
    } else {
      alert('Please fill the required fields')
    }
  }


}
