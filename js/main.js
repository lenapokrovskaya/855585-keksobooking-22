const TITLES = [
  'Объект1',
  'Объект2',
  'Объект3',
  'Объект4',
  'Объект5',
  'Объект6',
  'Объект7',
  'Объект8',
  'Объект9',
  'Объект10',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'];

const HOURS = [
  '12:00',
  '13:00',
  '14:00'];

const FEATURE = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];

const DESCRIPTIONS = [
  'описание помещения1',
  'описание помещения2',
  'описание помещения3',
  'описание помещения4',
  'описание помещения5',
  'описание помещения6',
  'описание помещения7',
  'описание помещения8',
  'описание помещения9',
  'описание помещения10'];

const PHOTO = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const SIMILAR_OFFERS_COUNT = 10;

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно


function getRandomFloat(min, max, decimal) {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  }
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

getRandomFloat(1, 10, 4);


//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInt(min, max) {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(getRandomInt(1, 20));




//Функция random из утилитарной библиотеки lodash.


const getRandomArrayElement = (elements) => {
  // eslint-disable-next-line no-undef
  return elements[_.random(0, elements.length - 1)];
};

//Функция рандомного массива
const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (getRandomInt(0, 1)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}


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
