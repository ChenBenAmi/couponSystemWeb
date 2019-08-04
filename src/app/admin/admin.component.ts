import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

  


 
export class AdminComponent implements OnInit {
private _url:string = "http://localhost:8080/Coupon_System/rest/admin/getCompanies";
private example = "https://my-json-server.typicode.com/typicode/demo/profile";
constructor(private http: HttpClient) { }

  ngOnInit() {
   this.http.get(this._url,{withCredentials:true})
   .subscribe(
     (data:any[])=>{
       console.log(data);
     }
   );
  }
}
