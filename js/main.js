import {deactivateForm, validateTime, validatePrice, getRoomCapacity} from './form.js';
import {getInputAddress, initMap} from './map.js';
import {createFetch} from './create-fetch.js';
import {createMarkers} from './map.js';
import './validation-form.js';
import './filter.js';

const SIMILAR_OFFER_COUNT = 10;

deactivateForm();
getRoomCapacity()
getInputAddress();
validateTime();
validatePrice();

const fetchData = createFetch(
  (data) => {
    initMap();
    createMarkers(data.slice(0, SIMILAR_OFFER_COUNT));
  })

fetchData();
