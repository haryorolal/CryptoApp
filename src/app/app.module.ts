import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexModule} from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitComponent } from './submit/submit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { sharedModule } from './Shared/shared.module';
import { WalletFormModule } from './wallet-form/wallet-form.module';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { VacancyModule } from './vacancy/vacancy.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    CommentComponent,
    SubmitComponent,
    AboutUsComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    MaterialModule,
    sharedModule,
    WalletFormModule,
    VacancyModule
  ],
  providers: [
    AuthService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
