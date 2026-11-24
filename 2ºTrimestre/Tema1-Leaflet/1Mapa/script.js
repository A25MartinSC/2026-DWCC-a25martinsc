"use strict"

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

if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(
    function (posicion) {

      // desestruturación de obxectos
      const { latitude, longitude } = posicion.coords;

      const map = new LeafletMap('map').setView([latitude, longitude], 17);

      new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);


      let popup = new Popup();
      let marker = null;

      function onMapClick(e) {

        if (marker !== null) {
          marker.remove();
        }

        marker = new Marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        popup
          .setLatLng(e.latlng)
          .setContent(
            '<b>Longitud:</b> ' +
            e.latlng.lng +
            '<br>' +
            '<b>Latitud:</b> ' +
            e.latlng.lat
          )
          .openOn(map);
      }
      map.on('click', onMapClick);
    })

}