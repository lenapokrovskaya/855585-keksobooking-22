import {activateForm} from './form.js';
import {createOfferCard} from './card.js';

const LAT = 35.6894;
const LNG = 139.6917;

// eslint-disable-next-line no-undef
const map = L.map('map')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);

// eslint-disable-next-line no-undef
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// eslint-disable-next-line no-undef
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
// eslint-disable-next-line no-undef
let markerGroup = L.layerGroup().addTo(map);

// eslint-disable-next-line no-undef
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

//Вывод координат в поле адреса

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
  // eslint-disable-next-line no-undef
    const pinIcon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // eslint-disable-next-line no-undef
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
  // eslint-disable-next-line no-undef
  markerGroup = L.layerGroup().addTo(map);
};

export {getInputAddress, createMarkers, setInitStartPin, removeMarkers};
