import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponentComponent } from './doctors-component.component';

describe('DoctorsComponentComponent', () => {
  let component: DoctorsComponentComponent;
  let fixture: ComponentFixture<DoctorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
