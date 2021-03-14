import {activateForm} from './form.js';
//import {similarOffers} from './mock.js';
//console.log(typeof similarOffers);
import {createOfferCard} from './card.js';



const LAT = 35.6894;
const LNG = 139.6917;

// eslint-disable-next-line no-undef
const map = L.map('map')
  .on('load', () => {
    //console.log('Карта инициализирована')
    //активировать форму
    activateForm();
    //console.log(activateForm());
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
////

// eslint-disable-next-line no-undef
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

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

//marker.on('moveend', (evt) => {
//console.log(evt.target.getLatLng());
//);

//Вывод координат в поле адреса

const getInputAddress = () => {

  const inputAddress = document.querySelector('#address');
  const {lat, lng} = marker.getLatLng();
  inputAddress.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
  //console.log(inputAddress);
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


//Добавление на карту обычных меток

const createMarks = function (offers) {

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
      .addTo(map)
      .bindPopup(createOfferCard(offer));
  });

};

export {getInputAddress, createMarks, setInitStartPin};
