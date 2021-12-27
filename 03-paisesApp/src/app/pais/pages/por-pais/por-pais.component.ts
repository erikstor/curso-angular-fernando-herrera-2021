import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})
export class PorPaisComponent {

  termino: string = ''
  hayError: Boolean = false
  mostrarSugerencias: boolean = false

  paises: Pais[] = []
  paisesSugeridos: Pais[] = []

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string) {
    console.log(this.termino)

    this.termino = termino
    this.hayError = false

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
          this.paises = paises
        },
        (error => {
          this.hayError = true
          this.paises = []
          console.log(error)
        }))

  }

  sugerencias(termino: string) {
    this.hayError = false
    this.termino = termino
    this.paisesSugeridos = []
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        error => this.hayError = true
      )

  }


  buscarSugerido(termino: string) {
    this.buscar(termino)
    this.mostrarSugerencias = false
  }


}
