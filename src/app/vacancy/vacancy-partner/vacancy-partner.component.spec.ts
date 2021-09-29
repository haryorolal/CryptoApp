import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPartnerComponent } from './vacancy-partner.component';

describe('VacancyPartnerComponent', () => {
  let component: VacancyPartnerComponent;
  let fixture: ComponentFixture<VacancyPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
