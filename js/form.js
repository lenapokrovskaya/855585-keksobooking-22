const ROOMS_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};
const announcement = document.querySelector('.ad-form');
const formElements = announcement.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');
const mapFiltersFieldsetInput = mapFiltersFieldset.querySelectorAll('input');
const timeIn = announcement.querySelector('#timein');
const timeOut = announcement.querySelector('#timeout');
const type = announcement.querySelector('#type');
const price = announcement.querySelector('#price');
const room = announcement.querySelector('#room_number');
const capacity = announcement.querySelector('#capacity');

const deactivateForm = () => {

  announcement.classList.add('ad-form--disabled');
  formElements.forEach((el)=> {
    el.setAttribute('disabled', '');
  })

  mapFilters.classList.add('map__filters--disabled');
  mapFiltersSelect.forEach((el)=> {
    el.setAttribute('disabled', '');
  })

  mapFiltersFieldset.setAttribute('disabled', '');
  mapFiltersFieldsetInput.forEach((el)=> {
    el.setAttribute('disabled', '');
  })

};

const activateForm = () => {
  announcement.classList.remove('ad-form--disabled');
  formElements.forEach((el)=> {
    el.removeAttribute('disabled', '');
  })

  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelect.forEach((el)=> {
    el.removeAttribute('disabled', '');
  })

  mapFiltersFieldset.removeAttribute('disabled');
  mapFiltersFieldsetInput.forEach((el)=> {
    el.removeAttribute('disabled', '');
  })
};


const validateTime = () => {
  timeIn.addEventListener('click', () => timeOut.value = timeIn.value);
  timeOut.addEventListener('click', () => timeIn.value = timeOut.value);
}

const housingParameters = {
  palace: {
    type: 'Дворец',
    price: 10000,
  },

  house: {
    type: 'Дом',
    price: 5000,
  },

  flat: {
    type: 'Квартира',
    price: 1000,
  },

  bungalow: {
    type: 'Бунгало',
    price: 0,
  },
};

const validatePrice= () => {
  type.addEventListener('change', () => {
    price.placeholder = housingParameters[type.value].price;
    price.min = housingParameters[type.value].price;
  });
};

const getRoomCapacity = () => {
  for (let option of capacity.options) {
    option.disabled = !ROOMS_CAPACITY[room.value].includes(option.value);
  }
  capacity.value = ROOMS_CAPACITY[room.value].includes(capacity.value) ? capacity.value : ROOMS_CAPACITY[room.value][0];
};

room.addEventListener('change', () => {
  getRoomCapacity();
});

export {deactivateForm, activateForm, validateTime, validatePrice, getRoomCapacity};
