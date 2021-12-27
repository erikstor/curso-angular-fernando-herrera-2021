import {Component} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {

  termino: string = ''
  hayError: Boolean = false
  paises: Pais[] = []

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

    // todo use termino

  }

}
