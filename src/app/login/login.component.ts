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
    userName: 'a', password: 'a', clientType: 'CUSTOMER'
  };
  result: Response;

  ngOnInit() {
  }

  log(user: LoginUser) {
    this.loginService.log(user).subscribe(
      (res:any) => {
        this.result=res
        console.log("this.result is --->"+this.result.body);
        this.loginService.token=this.result.body.toString();
        if (user.clientType==='ADMIN') {
          this.router.navigate(['/admin']);
        } else if (user.clientType==='COMPANY') {
          this.router.navigate(['/company']);
        } else if (user.clientType==='CUSTOMER') {
          this.router.navigate(['/customer']);
        }
      }
    );
  }

}


