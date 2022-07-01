import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control/form-control.component';
import { InputArrayComponent } from './input-array/input-array.component';

const CUSTOMER_COMPOENENT = [FormControlComponent, InputArrayComponent];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ...CUSTOMER_COMPOENENT],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
