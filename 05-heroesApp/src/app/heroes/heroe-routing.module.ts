import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import {ListadoComponent} from "./Pages/listado/listado.component";
import {AgregarComponent} from "./Pages/agregar/agregar.component";
import {BuscarComponent} from "./Pages/buscar/buscar.component";
import {HeroeComponent} from "./Pages/heroe/heroe.component";
import {HomeComponent} from "./Pages/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroeRoutingModule {
}
