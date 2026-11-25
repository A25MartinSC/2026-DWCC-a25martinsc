"use strict";

import {
  LeafletMap,
  TileLayer,
  Marker,
  CircleMarker,
  Control,
  DomUtil,
  Popup,
  Circle,
  Polyline,
  Polygon,
} from 'leaflet';

const map = new LeafletMap('map').setView([42.8805, -8.5457], 14);

new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const form = document.getElementById('form');
const input = document.getElementById('descripcion');

let puntoPulsado;

map.on('click', (e) => {
  puntoPulsado = e.latlng;
  form.hidden = false;
  input.focus();
});

