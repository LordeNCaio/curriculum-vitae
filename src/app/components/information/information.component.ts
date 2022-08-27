import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() user : UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
