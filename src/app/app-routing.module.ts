import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CommonModule } from '@angular/common';

const walletModule = () => import("./wallet-form/wallet-form.module").then(x => x.WalletFormModule);
const vacancyModule = () => import("./vacancy/vacancy.module").then(x => x.VacancyModule);


const appRoutes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'wallets', loadChildren: walletModule},
  {path: 'submit', component:SubmitComponent},
  {path: 'aboutus', component:AboutUsComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'findjob', loadChildren: vacancyModule}
  //{path: 'findjob', loadChildren: './vacancy/vacancy.module#VacancyModule'},
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
