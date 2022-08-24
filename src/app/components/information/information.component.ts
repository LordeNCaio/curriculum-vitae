import { Component, Input, OnInit } from '@angular/core';
import { GraduationRecordModel } from 'src/app/models/records/graduation-record.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  @Input() graduations : Array<GraduationRecordModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
