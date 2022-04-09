import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";


interface MarcadorColor {
  color: string,
  marker?: mapboxgl.Marker,
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
        cursor: pointer;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef

  mapa!: mapboxgl.Map
  zoomLevel: number = 17
  center: [number, number] = [-76.51794073972356, 3.38649146673913]

  marcadores: MarcadorColor[] = []

  constructor() {
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.leerLocalStorage()

    // const markerHTML: HTMLElement = document.createElement('div')
    // markerHTML.innerHTML = 'Hola Mundo'

    // new mapboxgl.Marker({
    // element: markerHTML
    // }).setLngLat(this.center).addTo(this.mapa)

  }

  irMarcador(marker: mapboxgl.Marker): void {
    const {lng, lat} = marker.getLngLat()
    this.center = [lng, lat]
    this.mapa.flyTo({center: this.center})
  }

  agregarMarcador(): void {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const marker = new mapboxgl.Marker(
      {
        draggable: true,
        color
      }
    ).setLngLat(this.center).addTo(this.mapa)

    marker.on('dragend', () => {
      this.guardarMarcadoresLocalStorage()
    })

    this.marcadores.push({color, marker})
    this.guardarMarcadoresLocalStorage()
  }

  guardarMarcadoresLocalStorage(): void {

    const lngLatArr: MarcadorColor[] = []

    this.marcadores.forEach(m => {
      const color = m.color
      const {lng, lat} = m.marker!.getLngLat()

      lngLatArr.push({
        color,
        centro: [lng, lat]
      })

    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))
  }

  leerLocalStorage(): void {

    if (!localStorage.getItem('marcadores')) {
      return
    }

    const lgnLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!)

    lgnLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      }).setLngLat(m.centro!).addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      })

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage()
      })

    })


  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove()
    this.marcadores.splice(i, 1)
    this.guardarMarcadoresLocalStorage()
  }

}
