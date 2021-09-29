import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacancyRoutingModule } from './vacancy-routing.module';
import { VacancyApplyComponent } from './vacancy-apply/vacancy-apply.component';
import { VacancyRepComponent } from './vacancy-rep/vacancy-rep.component';
import { VacancyMainComponent } from './vacancy-main/vacancy-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { VacancyComponent } from './vacancy.component';
import { VacancyPartnerComponent } from './vacancy-partner/vacancy-partner.component';
import { VacancyShopperComponent } from './vacancy-shopper/vacancy-shopper.component';
import { VacancyDigitalComponent } from './vacancy-digital/vacancy-digital.component';


@NgModule({
  declarations: [    
    VacancyApplyComponent,
    VacancyRepComponent,
    VacancyMainComponent,
    VacancyComponent,
    VacancyPartnerComponent,
    VacancyShopperComponent,
    VacancyDigitalComponent
  ],
  imports: [
    CommonModule,
    VacancyRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class VacancyModule { }
