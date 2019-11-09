import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { Router } from '@angular/router';
import { CompanyToSave } from 'src/app/models/companyToSave';

@Component({
  selector: 'app-createCompany',
  templateUrl: './createCompany.component.html',
  styleUrls: ['./createCompany.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  }
  company:CompanyToSave = {
    companyName: '',email:'', password: ''
  };

  saveCompany(company:CompanyToSave) {
    if(this.company.companyName!='' && this.company.email!='' && this.company.password!='') {
      this.adminService.addCompany(company)
    } else {
      alert('Please fill the required fields')
    }
  }

}
