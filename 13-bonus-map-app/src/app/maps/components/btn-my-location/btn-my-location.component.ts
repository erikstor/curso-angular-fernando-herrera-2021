import {Component} from '@angular/core';
import {MapService} from "../../services/map.service";
import {PlacesService} from "../../services/places.service";

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService: PlacesService
  ) {
  }

  goToMyLocation() {

    if (!this.placesService.useLocation) {
      throw new Error('No hay ubicación de usuario')
    }

    if (!this.mapService.isMapReady) {
      throw new Error('No hay un mapa disponible')
    }


    this.mapService.flyTo(this.placesService.useLocation)
  }

}
