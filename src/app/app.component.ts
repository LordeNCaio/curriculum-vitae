import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curriculum-vitae';

  user: UserModel = new UserModel();

  ngOnInit(): void {

  }
}
