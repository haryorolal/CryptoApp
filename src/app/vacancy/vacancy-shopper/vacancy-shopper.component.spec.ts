import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyShopperComponent } from './vacancy-shopper.component';

describe('VacancyShopperComponent', () => {
  let component: VacancyShopperComponent;
  let fixture: ComponentFixture<VacancyShopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyShopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
