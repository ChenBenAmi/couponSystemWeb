import { LoginUser } from '../../models/login-user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  log(user: LoginUser) {
const params = new HttpParams()
  .set('userName', user.userName)
  .set('password', user.password)
  .set("clientType",user.clientType);
    return this.http.post('http://localhost:5000/login',params );
  }
}
