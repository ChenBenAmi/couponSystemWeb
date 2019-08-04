import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})





export class AdminComponent implements OnInit {
  private url = 'http://localhost:8080/Coupon_System/rest/admin/getCompanies';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url, { withCredentials: true })
      .subscribe(
        (data: any[]) => {
          console.log(data);
        }
      );
  }
}
