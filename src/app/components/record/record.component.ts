import { Component, Input, OnInit } from '@angular/core';
import { RecordModel } from 'src/app/shared/models/record/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() name: String
  @Input() records: Array<RecordModel>;

  constructor() { }

  ngOnInit(): void {
  }

}
