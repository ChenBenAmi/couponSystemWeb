import { LoginUser } from './../objects/login-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  log(user: LoginUser) {
    var headers = new Headers();
    headers.append('Content-Type','application/json');
     let options = new HttpRequest("POST","http://localhost:8080",{headers:headers},{withCredentials:true});

    
            return this.http.post('http://localhost:8080/Coupon_System/rest/login/auth',user,{headers: 
            {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200' },withCredentials:true});
  }
}
