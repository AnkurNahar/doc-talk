import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSlotComponentComponent } from './time-slot-component.component';

describe('TimeSlotComponentComponent', () => {
  let component: TimeSlotComponentComponent;
  let fixture: ComponentFixture<TimeSlotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSlotComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSlotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
