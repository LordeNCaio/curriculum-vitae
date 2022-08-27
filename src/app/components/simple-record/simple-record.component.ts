import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProgressBar } from 'src/app/shared/enums/progress-bar.enum';
import { SmallRecordType } from 'src/app/shared/enums/small-record-type.enum';
import { SmallRecordModel } from 'src/app/shared/models/small-record/small-record.model';

@Component({
  selector: 'app-simple-record',
  templateUrl: './simple-record.component.html',
  styleUrls: ['./simple-record.component.scss']
})
export class SimpleRecordComponent implements OnInit {

  @Input() name: String
  @Input() records: Array<SmallRecordModel>;

  sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit(): void {
  }

  isText(record: SmallRecordModel): boolean {
    return record.getType() === SmallRecordType.TEXT;
  }

  isSquareBar(record: SmallRecordModel): boolean {
    return record.getType() === SmallRecordType.SQUARE_BAR;
  }

  isProgressBar(record: SmallRecordModel): boolean {
    return record.getType() === SmallRecordType.PROGRESS_BAR;
  }
}
