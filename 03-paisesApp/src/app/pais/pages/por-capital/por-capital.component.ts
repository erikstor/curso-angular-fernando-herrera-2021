import {Component} from '@angular/core';
import {Pais} from "../../interfaces/pais.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {
  termino: string = ''
  hayError: Boolean = false
  paises: Pais[] = []

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string) {

    this.termino = termino
    this.hayError = false

    this.paisService.buscarPaisPorCapital(this.termino)
      .subscribe((paises) => {
          this.paises = paises
        },
        (error => {
          this.hayError = true
          this.paises = []
        }))

  }

}
