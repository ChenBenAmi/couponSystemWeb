import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getAllCompanies() {
    return this.http.get('"http://localhost:8080/Coupon_System/rest/admin/getComapnies"', {
      withCredentials: true
    });
  }
  getAllCustomers() {
    return this.http.get('"http://localhost:8080/Coupon_System/rest/admin/getCustomers"', {
      withCredentials: true
    });
  }

  constructor(private http: HttpClient) { }

}
