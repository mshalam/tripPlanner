const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  // Your Code Here
  console.log('create marker');
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  if (type === 'hotel') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  } else if (type === 'restaurant') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  } else if (type === 'activity') {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  } else {
    markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
