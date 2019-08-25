import { LoginServiceService } from '../services/Login/login-service.service';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private router: Router) { }
  user: LoginUser = {
    userName: '', password: '', clientType: 'CUSTOMER'
  };
  result: any;

  ngOnInit() {
  }

  log(user: LoginUser) {
    const observable = this.loginService.log(user).subscribe(
      (res) => {
        this.result = res;
        console.log(this.result.comment);
        if (this.result.comment === 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (this.result.comment === 'COMPANY') {
          this.router.navigate(['/company']);
        } else if (this.result.comment === 'CUSTOMER') {
          this.router.navigate(['/customer']);
        }
      }
    );
  }

}


