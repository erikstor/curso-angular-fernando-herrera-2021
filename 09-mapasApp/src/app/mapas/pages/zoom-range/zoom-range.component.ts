import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .row {
      background-color: white;
      border-radius: 10px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 500px;
    }
  `]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef

  mapa!: mapboxgl.Map
  zoomLevel: number = 10
  center: [number, number] = [-76.51794073972356, 3.38649146673913]

  constructor() {
  }

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {
    })
    this.mapa.off('zoomend', () => {
    })
    this.mapa.off('move', () => {
    })
  }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel // starting zoom
    });

    this.mapa.on('zoom', () => {
      this.zoomLevel = this.mapa.getZoom()
    })

    this.mapa.on('zoomend', () => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18)
      }
    })

    this.mapa.on('move', (ev) => {
      const target = ev.target
      const {lng, lat} = target.getCenter()
      this.center = [lng, lat]
    })
  }

  zoomIn() {
    this.mapa.zoomIn()
  }

  zoomOut() {
    this.mapa.zoomOut()
  }

  zoomCambio(number: string) {
    this.mapa.zoomTo(Number(number))
  }

}
