import { Component } from '@angular/core';
import { User } from './objects/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'couponSystemWeb';

  flag = false;
  user: User = {
    id: 1, userName: 'chen', password: 'password', email: 'email@email', type: 'admin'
  };

  clicky() {
    this.flag = !this.flag;
  }
}
