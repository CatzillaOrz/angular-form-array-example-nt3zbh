import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
  APP_INITIALIZER,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control/form-control.component';
import { InputArrayComponent } from './input-array/input-array.component';
import { AppInitService } from './app-init.service';

const CUSTOMER_COMPOENENT = [FormControlComponent, InputArrayComponent];
const CUSTOMER_SERVICES = [AppInitService];

export function initilaizeApp1(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.init();
  };
}

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, ...CUSTOMER_COMPOENENT],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    // ...CUSTOMER_SERVICES,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initilaizeApp1,
    //   deps: [AppInitService],
    //   multi: true,
    // },
  ],
})
export class AppModule {}
