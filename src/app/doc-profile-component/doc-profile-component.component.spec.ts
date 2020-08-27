import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocProfileComponentComponent } from './doc-profile-component.component';

describe('DocProfileComponentComponent', () => {
  let component: DocProfileComponentComponent;
  let fixture: ComponentFixture<DocProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
