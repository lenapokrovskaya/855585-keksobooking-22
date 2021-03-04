import {similarOffers} from './mock.js';

const similarListElement = document.querySelector('#map-canvas');
const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');





const offerElement = similarOfferTemplate.cloneNode(true);
const offer = similarOffers[0];
offerElement.querySelector('.popup__title').textContent = offer.offer.title;
offerElement.querySelector('.popup__text--address').textContent = offer.offer.address;
offerElement.querySelector('.popup__text--price').textContent = offer.offer.price + ' ₽/ночь';
offerElement.querySelector('.popup__type').textContent = offer.offer.type;
offerElement.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
offerElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.offer.checkin + ', выезд до ' + offer.offer.checkout;
offerElement.querySelector('.popup__feature').textContent = offer.offer.features;
offerElement.querySelector('.popup__description').textContent = offer.offer.description;
offerElement.querySelector('.popup__photo').src = offer.offer.photos;
offerElement.querySelector('.popup__avatar').src = offer.author.avatar;


const photoListElement = offerElement.querySelector('.popup__photos');
const photoItem = photoListElement.querySelector('img');
const fragment = document.createDocumentFragment();

for (let i = 0; i < offer.offer.photos.length; i++) {
  const element = photoItem.cloneNode(true);
  element.src = offer.offer.photos[i];
  fragment.appendChild(element);
}
photoItem.remove();
photoListElement.appendChild(fragment);




const featureListElement = offerElement.querySelector('.popup__features');
const featureItem = featureListElement.querySelector('li');
const fragmentFeature = document.createDocumentFragment();

for (let i = 0; i < offer.offer.features.length; i++) {
  const featureElement = featureItem.cloneNode(true);

  featureElement.classList.remove('popup__feature--wifi');
  featureElement.classList.add('popup__feature--' + (offer.offer.features[i]));
  fragmentFeature.appendChild(featureElement);
}

// featureListElement.innerHtml = '';
// featureListElement.appendChild(fragmentFeature);


featureListElement.innerHTML = '';
featureListElement.appendChild(fragmentFeature);



similarListElement.appendChild(offerElement);


alert(offer.offer.title);
