import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletFormService } from './wallet-form.service';
import { WalletFormComponent } from './wallet-forms/wallet-form.component';
import { NewWalletComponent } from './wallet-admin/new-wallet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletFormRoutingModule } from './wallet-form-routing.module';
import { MaterialModule } from '../material.module';
import { sharedModule } from '../Shared/shared.module';
import { WallComponent } from './wall-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";


@NgModule({
  declarations: [    
    WallComponent,
    WalletFormComponent,
    NewWalletComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WalletFormRoutingModule,
    sharedModule,
    AngularFileUploaderModule
  ],
  providers:[WalletFormService]
})
export class WalletFormModule { }
