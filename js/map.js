/* global L:readonly */

import {activateForm} from './form.js';
import {createOfferCard} from './card.js';
import {createFetch} from './create-fetch.js';


const SIMILAR_OFFER_COUNT = 10;
const LAT = 35.6894;
const LNG = 139.6917;
const map = L.map('map');


const initMap = () => {
  map.on('load', () => {
    activateForm();
    createFetch(
      (data) => {
        createMarkers(data.slice(0, SIMILAR_OFFER_COUNT));
      })
  })
  map.setView({
    lat: LAT,
    lng: LNG,
  }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

let markerGroup = L.layerGroup().addTo(map);

const marker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

const getInputAddress = () => {

  const inputAddress = document.querySelector('#address');
  const {lat, lng} = marker.getLatLng();
  inputAddress.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
}

const onLoadMainPin = (evt) => {
  const latLng = evt.target.getLatLng();
  getInputAddress(latLng.lat, latLng.lng);
};

const fillAddressInputMove = () => {
  marker.on('move', getInputAddress);
}

getInputAddress();
fillAddressInputMove();

getInputAddress(LAT, LNG);
marker.on('moveend', onLoadMainPin);

const setInitStartPin = () => {
  map.setView({
    lat: LAT,
    lng: LNG,
  }, 10);
  marker.setLatLng({
    lat: LAT,
    lng: LNG,
  });
  getInputAddress(LAT, LNG);
};

const createMarkers = function (offers) {

  offers.forEach(offer => {
    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker2 = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    marker2
      .addTo(markerGroup)
      .bindPopup(createOfferCard(offer));
  });

};

const removeMarkers = () => {
  map.removeLayer(markerGroup);
  markerGroup = L.layerGroup().addTo(map);
};

export {getInputAddress, createMarkers, setInitStartPin, removeMarkers, initMap, SIMILAR_OFFER_COUNT};
