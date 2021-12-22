import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../services/gifs.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {

  // buscar(event: KeyboardEvent){
  //   console.log('lel')
  // }

  // buscar(params: string) {
  //   console.log('lel', params)
  // }

  constructor(private gifsService: GifsService) {
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  buscar() {

    const valor = this.txtBuscar.nativeElement.value

    if (valor.trim().length === 0) {
      return
    }

    this.gifsService.buscarGifs(valor)

    this.txtBuscar.nativeElement.value = ''
  }

}

