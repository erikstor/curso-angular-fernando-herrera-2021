import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpa3N0b3IiLCJhIjoiY2wxcnpjYm96MHo3azNqb2RucTczaGgwbSJ9.Zby2NHs6R_iaR8vDtCkJIA';

if (!navigator.geolocation) {
  alert('Navegador no soporta la geolocalizacion')
  throw new Error('Navegador no soporta la geolocalizacion')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
