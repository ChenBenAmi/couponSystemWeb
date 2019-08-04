import { LoginUser } from '../../objects/login-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  log(user: LoginUser) {
    return this.http.post('http://localhost:8080/Coupon_System/rest/login/auth', user, {withCredentials: true
    });
  }
}
