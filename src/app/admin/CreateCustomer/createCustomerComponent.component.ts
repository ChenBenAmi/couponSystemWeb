import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { Router } from '@angular/router';
import { CustomerToSave } from 'src/app/models/customerToSave';

@Component({
  selector: 'app-createCustomerComponent',
  templateUrl: './createCustomerComponent.component.html',
  styleUrls: ['./createCustomerComponent.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  }

  customer:CustomerToSave = {
    customerName: '', password: ''
  };

  saveCustomer(customer:CustomerToSave) {
    if(this.customer.customerName!='' && this.customer.password!='') {
      this.adminService.addCustomer(customer)
    } else {
      alert('Please fill the required fields')
    }
  }


}
