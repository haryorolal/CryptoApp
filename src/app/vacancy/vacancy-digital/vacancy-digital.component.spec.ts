import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDigitalComponent } from './vacancy-digital.component';

describe('VacancyDigitalComponent', () => {
  let component: VacancyDigitalComponent;
  let fixture: ComponentFixture<VacancyDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
