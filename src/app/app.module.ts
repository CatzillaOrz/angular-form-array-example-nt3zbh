import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control/form-control.component';

const CUSTOMER_COMPOENENT = [FormControlComponent];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ...CUSTOMER_COMPOENENT],
  bootstrap: [AppComponent],
})
export class AppModule {}
