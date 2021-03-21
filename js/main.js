import {deactivateForm} from './form.js';
import {activateForm} from './form.js';
import {getInputAddress} from './map.js';
import {createFetch} from './create-fetch.js';
import {createMarkers} from './map.js';
import './validation-form.js';
import './filter.js';

const SIMILAR_OFFER_COUNT = 10;

deactivateForm();
activateForm();
getInputAddress();

const fetchData = createFetch(
  (data) => {
    createMarkers(data.slice(0, SIMILAR_OFFER_COUNT));
  })

fetchData();
