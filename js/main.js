import './card.js';
import './map.js';
import {deactivateForm} from './form.js';
import {activateForm} from './form.js';
import {getInputAddress} from './map.js';
import {createFetch} from './create-fetch.js';
import {createMarks} from './map.js';
import './validation-form.js';

deactivateForm();
activateForm();
getInputAddress();

const SIMILAR_OFFER_COUNT = 10;

const fetchData = createFetch(
  (data) => {
    createMarks(data.slice(0, SIMILAR_OFFER_COUNT));
  })

fetchData();
