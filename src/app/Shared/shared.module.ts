import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { FlexModule } from '@angular/flex-layout';
import { AngularFileUploaderModule } from 'angular-file-uploader';


@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule, 
    AngularFileUploaderModule
  ],
  exports:[
      CommonModule,
      ReactiveFormsModule,  
      HttpClientModule,
      FormsModule,
      FlexModule,
      MaterialModule,
      AngularFileUploaderModule
  ]
  
})
export class sharedModule { }
