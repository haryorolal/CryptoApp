import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyMainComponent } from './vacancy-main.component';

describe('VacancyMainComponent', () => {
  let component: VacancyMainComponent;
  let fixture: ComponentFixture<VacancyMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
