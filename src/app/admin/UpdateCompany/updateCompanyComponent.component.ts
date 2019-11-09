import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/Admin/admin.service';
import { Router } from '@angular/router';
import { CustomerToSave } from 'src/app/models/customerToSave';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-updateCompanyComponent',
  templateUrl: './updateCompanyComponent.component.html',
  styleUrls: ['./updateCompanyComponent.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit() {
  }

  private company:Company=this.adminService.company

  saveCompany(company:Company) {
    if(this.company.companyName!='' && this.company.password!='' && company.email!='') {
      this.adminService.updateCompany(company)
    } else {
      alert('Please fill the required fields')
    }
  }


}
