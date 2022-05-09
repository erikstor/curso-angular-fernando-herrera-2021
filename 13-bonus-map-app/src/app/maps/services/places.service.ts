import {Injectable} from '@angular/core';
import {Feature, getPlacesByQuery} from "../interfaces/places";
import {PlacesApiClient} from "../api/PlacesApiClient";
import {MapService} from "./map.service";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number]
  public isLoadingPlaces: boolean = false
  public places: Feature[] = []


  get isUserLocationReady(): boolean {
    return !!this.useLocation
  }

  constructor(
    private placesApiClient: PlacesApiClient,
    private mapService: MapService
  ) {
    this.getUserLocation()
  }


  public async getUserLocation(): Promise<[number, number]> {
    return new Promise<[number, number]>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude]
          resolve(this.useLocation)
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion')
          console.log(err)
          reject()
        }
      )
    })
  }


  getPlacesByQuery(query: string) {

    if (!this.useLocation) {
      throw new Error('No hay user location')
    }

    if (query.length === 0) {
      this.places = []
      this.isLoadingPlaces = false
      return
    }

    this.isLoadingPlaces = true
    this.placesApiClient.get<getPlacesByQuery>(`/${query}.json`, {
      params: {
        proximity: this.useLocation?.join(',')
      }
    })
      .subscribe((resp: getPlacesByQuery) => {
        this.isLoadingPlaces = false
        this.places = resp.features
        this.mapService.createMarkersFromPlaces(resp.features, this.useLocation!)
      })
  }


  deletePlaces() {
    this.places = []
  }

}
