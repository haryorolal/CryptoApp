import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './wall-form.component';
import { WalletFormComponent } from './wallet-forms/wallet-form.component';
import { NewWalletComponent } from './wallet-admin/new-wallet.component';


const routes: Routes = [
  {path: '', component:WallComponent, children:[
    {path: '', redirectTo:'/wallets/wallet', pathMatch:'full'},
    {path: 'wallet', component: WalletFormComponent},
    {path: 'newwallet', component: NewWalletComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletFormRoutingModule { }
