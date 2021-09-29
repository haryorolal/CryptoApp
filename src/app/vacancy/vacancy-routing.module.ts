import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacancyApplyComponent } from './vacancy-apply/vacancy-apply.component';
import { VacancyMainComponent } from './vacancy-main/vacancy-main.component';
import { VacancyRepComponent } from './vacancy-rep/vacancy-rep.component';
import { VacancyComponent } from './vacancy.component';
import { VacancyPartnerComponent } from './vacancy-partner/vacancy-partner.component';
import { VacancyShopperComponent } from './vacancy-shopper/vacancy-shopper.component';
import { VacancyDigitalComponent } from './vacancy-digital/vacancy-digital.component';


const routes: Routes = [
  {path: '', component: VacancyComponent, children:[
    {path: '', redirectTo: '/vacancy-main', pathMatch:'full'},    
    {path: 'vacancy-main', component: VacancyMainComponent},
    {path:'vacancy-apply', component: VacancyApplyComponent},
    {path: 'vacancy-recep', component: VacancyRepComponent},
    {path: 'vacancy-partner', component: VacancyPartnerComponent},
    {path: 'vacancy-shopper', component: VacancyShopperComponent},
    {path: 'vacancy-digital', component: VacancyDigitalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacancyRoutingModule { }
