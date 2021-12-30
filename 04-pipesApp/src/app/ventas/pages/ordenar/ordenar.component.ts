import {Component} from '@angular/core';
import {Color, HeroeInterface} from "../../interfaces/ventas.interfaces";

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: []
})
export class OrdenarComponent {

  enMayusculas: boolean = false
  ordenarPor: string = ''

  heroes: HeroeInterface[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ]

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(value: string) {
    this.ordenarPor = value
  }

}
