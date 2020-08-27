import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocInfoComponentComponent } from './doc-info-component.component';

describe('DocInfoComponentComponent', () => {
  let component: DocInfoComponentComponent;
  let fixture: ComponentFixture<DocInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
