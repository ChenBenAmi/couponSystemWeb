import { LoginServiceService } from './login-service.service';
import { User } from './../objects/user';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../objects/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginServiceService) { }

  user: LoginUser = {
    userName: '', password: '', clientType: 'CLIENT'
  };
  result: any = [];

  ngOnInit() {
  }

  log(user: LoginUser) {
    const observable = this.login.log(user).subscribe(
      (res) => { this.result = res }
    );
    if (this.result = ! null) {
      
    }

  }

}
