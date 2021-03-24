import {showNotification} from './notification.js';
import {setInitStartPin, removeMarkers, createMarkers} from './map.js';
import {createSubmit} from './create-fetch.js';
import {getOffers, getSimilarOfferCount} from './filter.js';

const mainForm = document.querySelector('.ad-form');
const formFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');

mainForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  createSubmit(
    formData,
    () => {
      mainForm.reset();
      showNotification();
      formFilter.reset();
      setInitStartPin();
    },
  );
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  formFilter.reset();
  mainForm.reset();
  removeMarkers();
  createMarkers(getOffers().slice(0, getSimilarOfferCount()));
  setInitStartPin();
});
