import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import {AppComponent} from './app.component';

import {AppRouterModule} from "./app-router.module";
import {SharedModule} from "./shared/shared.module";
import {VentasModule} from "./ventas/ventas.module";

// Cambiar locale de la app

import localESCO from '@angular/common/locales/es-CO'
import localFR from '@angular/common/locales/fr'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localESCO)
registerLocaleData(localFR)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
