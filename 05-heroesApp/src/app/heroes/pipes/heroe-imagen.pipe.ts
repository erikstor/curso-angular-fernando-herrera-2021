import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen',
  pure: false // Solo si es completamente necesario - CONSUME MUCHO RECURSOS
})
export class HeroeImagenPipe implements PipeTransform {
  transform(value: Heroe): string {
    let path = './assets/no-image.png';

    if (value.alt_img) {
      path = value.alt_img;
    } else if (value.id && !value.alt_img) {
      path = `./assets/heroes/${value.id}.jpg`;
    }

    return path;
  }
}
