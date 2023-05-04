import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { GeneralInfoFormComponent } from './steps/general-info-form/general-info-form.component';
import { TaxpayerInfoFormComponent } from './steps/taxpayer-info-form/taxpayer-info-form.component';
import { AccountantInfoFormComponent } from './steps/accountant-info-form/accountant-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VmessageComponent } from './shared/vmessage/vmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoFormComponent,
    TaxpayerInfoFormComponent,
    AccountantInfoFormComponent,
    VmessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
