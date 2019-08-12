import { AdminService } from './../services/Admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Company } from '../models/company';
import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {

  private company: Company[];
  constructor(private http: HttpClient, private adminService: AdminService) { }

  ngOnInit() {

    this.loadCompanies();
  }
  loadCompanies() {
    this.adminService.getAllCompanies().subscribe((response: any) => {
      this.company = response;
      console.log(this.company[0].companyName);
    }
    );
  }
}
