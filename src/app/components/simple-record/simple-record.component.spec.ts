import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleRecordComponent } from './simple-record.component';

describe('SimpleRecordComponent', () => {
  let component: SimpleRecordComponent;
  let fixture: ComponentFixture<SimpleRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
