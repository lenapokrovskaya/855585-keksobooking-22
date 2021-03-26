import {createFetch} from './create-fetch.js';
import {createMarkers, removeMarkers} from './map.js';

const SIMILAR_OFFER_COUNT = 10;
const DELAY = 500;
const LOWERPRICE = 10000;
const HIGHPRICE = 50000;
const filterForm = document.querySelector('.map__filters');
const houseType = filterForm.querySelector('#housing-type');
const priceType = filterForm.querySelector('#housing-price');
const roomType = filterForm.querySelector('#housing-rooms');
const guestType = filterForm.querySelector('#housing-guests');


const priceFilter = (offer, price) => {
  if (price === 'any') {
    return true;
  }

  if (offer.offer.price <= LOWERPRICE && price === 'low') {
    return true;
  }
  if (offer.offer.price > LOWERPRICE && offer.offer.price <= HIGHPRICE && price === 'middle') {
    return true;
  }
  if (offer.offer.price > HIGHPRICE && price === 'high') {
    return true;
  }
  return false;
};

const houseTypeFilter = (offer, type) => {
  if (type === 'any' || offer.offer.type === type) {
    return true;
  }
  return false;
};

const roomFilter = (offer, room) => {
  if (room === 'any') {
    return true;
  }
  if (Number(room) === Number(offer.offer.rooms)) {
    return true;
  }
  return false;
};

const guestFilter = (offer, guest) => {
  if (guest === 'any') {
    return true;
  }
  if (Number(guest) === offer.offer.guests) {
    return true;
  }
  return false;
};

const comparisonFeatures = (offer) => {
  const featureElements = filterForm.querySelectorAll('.map__checkbox:checked');
  const featureList = Array.from(featureElements).map(element => element.value);
  return featureList.every((feature) => offer.offer.features.includes(feature));
};

const offerFilter = (offers) => {
  const elements = offers.filter((offer) => {
    return houseTypeFilter(offer, houseType.value) && priceFilter(offer, priceType.value) && roomFilter(offer, roomType.value) && guestFilter(offer, guestType.value) && comparisonFeatures(offer);
  });
  return elements;
};

let offers = [];
/*global _:readonly*/
const fetchData = createFetch((data) => {
  offers = data;
  createMarkers(offers.slice(0, SIMILAR_OFFER_COUNT));
  filterForm.addEventListener('change', _.debounce(() => {
    const filterData = offerFilter(offers);
    removeMarkers();
    createMarkers(filterData.slice(0, SIMILAR_OFFER_COUNT));
  }, DELAY));
});

fetchData();

const getOffers = () => {
  return offers;
};

const getSimilarOfferCount = () => {
  return SIMILAR_OFFER_COUNT;
};

export{getOffers, getSimilarOfferCount};
