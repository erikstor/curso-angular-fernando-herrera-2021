import {Component} from '@angular/core';
import {PlacesService} from "../../services/places.service";
import {Feature} from "../../interfaces/places";
import {MapService} from "../../services/map.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = ''

  constructor(
    private placesServices: PlacesService,
    private mapSerice: MapService
  ) {
  }

  get isLoadingPlaces(): boolean {
    return this.placesServices.isLoadingPlaces
  }

  get places(): Feature[] {
    return this.placesServices.places
  }

  flyTo(place: Feature) {
    const [lng, lat] = place.center
    this.selectedId = place.id
    this.mapSerice.flyTo([lng, lat])
  }


  getDirections(place: Feature) {


    if (!this.placesServices.useLocation) {
      throw new Error('No hay user location')
    }

    const start = this.placesServices.useLocation
    const end = place.center as [number, number]

    this.mapSerice.getRouteBetweenPoints(start, end)
    this.placesServices.deletePlaces()
  }

}
