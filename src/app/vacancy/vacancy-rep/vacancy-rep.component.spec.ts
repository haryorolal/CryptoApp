import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyRepComponent } from './vacancy-rep.component';

describe('VacancyRepComponent', () => {
  let component: VacancyRepComponent;
  let fixture: ComponentFixture<VacancyRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
