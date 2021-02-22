import {getRandomInt, getRandomFloat, getRandomArray, getRandomArrayElement} from './util.js';
import {TITLES, TYPES, HOURS, FEATURE, DESCRIPTIONS, PHOTO, SIMILAR_OFFERS_COUNT} from './data.js';

//Объявления
const createRandomOffer = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInt(1, 8)+ '.png'},
    //console.log(author);
    offer: {
      title: getRandomArrayElement(TITLES),
      address: 'х: ' + getRandomFloat(1, 10, 8) + ', y: ' + + getRandomFloat(1, 10, 8),
      price: (getRandomInt(1, 2000)),
      type: getRandomArrayElement(TYPES),
      rooms: (getRandomInt(1, 5)),
      guests: (getRandomInt(1, 5)),
      checkin: getRandomArrayElement(HOURS),
      checkout: getRandomArrayElement(HOURS),
      features: getRandomArray(FEATURE),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTO),
    },
    location: {
      x: 'х: ' + getRandomFloat(35.65000, 35.70000, 5),
      y: 'y: ' + getRandomFloat(139.70000, 139.80000, 5),
    },
  }
}

const similarOffers = new Array(SIMILAR_OFFERS_COUNT).fill(null).map(() => createRandomOffer());

alert(similarOffers);
