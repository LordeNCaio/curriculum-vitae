import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/shared/models/contact/contact.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() fullName: String;
  @Input() role: String;
  @Input() contacts: Array<ContactModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
