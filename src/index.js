const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoibXNoYWxhbSIsImEiOiJjanI5bm53ZmcwaHR0NDRxa29zNTJvYmNqIn0.RXzoQw2TGdV5eG5f2hWGRA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available
});

const marker = buildMarker('activity', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
const marker5 = buildMarker('hotel', [-74.009159, 40.705086]); // or [-87.6354, 41.8885]
marker5.addTo(map);
const marker2 = buildMarker('hotel', [-87.6354, 41.8885]);
marker2.addTo(map);
const marker3 = buildMarker('restaurant', [-64.009151, 30.705086]);
marker3.addTo(map);
const marker4 = buildMarker('other', [-50.009151, 51.705086]);
marker4.addTo(map);
