import { LoginServiceService } from './login-service.service';
import { User } from './../objects/user';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../objects/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginServiceService, private router: Router) { }
  url: string
  user: LoginUser = {
    userName: '', password: '', clientType: 'CLIENT'
  };
  result: any;

  ngOnInit() {
  }

  log(user: LoginUser) {
    const observable = this.login.log(user).subscribe(
      (res) => {
        this.result = res;
        console.log(this.result);
        if (this.result != null) {
          this.router.navigate(['/admin'])
        } 
      }
    );
  }

}


