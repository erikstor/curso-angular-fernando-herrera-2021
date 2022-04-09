import {Component, OnInit} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    const map = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-76.51794073972356, 3.38649146673913], // starting position [lng, lat]
      zoom: 20 // starting zoom
    });

  }


}
