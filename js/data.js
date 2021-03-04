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
  {
    type: 'bungalow',
    title: 'Бунгало',
  },
  {
    type: 'flat',
    title: 'Квартира',
  },
  {
    type: 'house',
    title: 'Дом',
  },
  {
    type: 'palace',
    title: 'Дворец',
  },
];

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
  'https://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'https://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'https://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const SIMILAR_OFFERS_COUNT = 10;

const TITLESTYPE = TYPES.map((typeofhousing) => {
  return typeofhousing.title;
});

export {TITLES, TYPES, TITLESTYPE, HOURS, FEATURE, DESCRIPTIONS, PHOTO, SIMILAR_OFFERS_COUNT}
