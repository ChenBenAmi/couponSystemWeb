import { Component, OnInit, Input } from '@angular/core';
import { User } from '../objects/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Coupon System';

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
