import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { HeroeRoutingModule } from './heroe-routing.module';

import { AgregarComponent } from './Pages/agregar/agregar.component';
import { BuscarComponent } from './Pages/buscar/buscar.component';
import { HeroeComponent } from './Pages/heroe/heroe.component';
import { HomeComponent } from './Pages/home/home.component';
import { ListadoComponent } from './Pages/listado/listado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeImagenPipe } from './pipes/heroe-imagen.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    HeroeImagenPipe,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroeRoutingModule,
  ],
})
export class HeroesModule {}
