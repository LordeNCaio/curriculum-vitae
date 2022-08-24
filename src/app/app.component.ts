import { Component, OnInit } from '@angular/core';
import { GraduationRecordModel } from './models/records/graduation-record.model';
import { Month } from './shared/enums/month.enum';
import { YearMonthModel } from './shared/models/year-month/year-month.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curriculum-vitae';

  graduations: Array<GraduationRecordModel> = [
    new GraduationRecordModel('Ensino Médio Completo', 'EE Professor Waldomiro Guimarães', 'Santo André', new YearMonthModel(2012, Month.JANEIRO), null)
  ];

  ngOnInit(): void {

  }
}
