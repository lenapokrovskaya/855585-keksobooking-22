const announcement = document.querySelector('.ad-form');
const timeIn = announcement.querySelector('#timein');
const timeOut = announcement.querySelector('#timeout');
const type = announcement.querySelector('#type');
const price = announcement.querySelector('#price');
const room = announcement.querySelector('#room_number');
const capacity = announcement.querySelector('#capacity');

const ROOMS_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const deactivateForm = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  const formElements = form.querySelectorAll('fieldset');

  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', '');
  }
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  const mapFiltersSelect = mapFilters.querySelectorAll('select');

  for (let i = 0; i < mapFiltersSelect.length; i++) {
    mapFiltersSelect[i].setAttribute('disabled', '');
  }

  const mapFiltersFieldset = mapFilters.querySelector('fieldset');
  mapFiltersFieldset.setAttribute('disabled', '');
  const mapFiltersFieldsetInput = mapFiltersFieldset.querySelectorAll('input');

  for (let i = 0; i < mapFiltersFieldsetInput.length; i++) {
    mapFiltersFieldsetInput[i].setAttribute('disabled', '');
  }
};

const activateForm = () => {
  const formActive = document.querySelector('.ad-form');
  formActive.classList.remove('ad-form--disabled');
  const formActiveElements = formActive.querySelectorAll('fieldset');
  for (let i = 0; i < formActiveElements.length; i++) {
    formActiveElements[i].removeAttribute('disabled', '');
  }
  const mapActiveFilters = document.querySelector('.map__filters');
  mapActiveFilters.classList.remove('map__filters--disabled');
  const mapActiveFiltersSelect = mapActiveFilters.querySelectorAll('select');

  for (let i = 0; i < mapActiveFiltersSelect.length; i++) {
    mapActiveFiltersSelect[i].removeAttribute('disabled', '');
  }
  const mapFiltersActiveFieldset = mapActiveFilters.querySelector('fieldset');
  mapFiltersActiveFieldset.removeAttribute('disabled', '');
  const mapFiltersActiveFieldsetInput = mapFiltersActiveFieldset.querySelectorAll('input');

  for (let i = 0; i < mapFiltersActiveFieldsetInput.length; i++) {
    mapFiltersActiveFieldsetInput[i].removeAttribute('disabled', '');
  }
};

const validateTime = () => {
  timeIn.addEventListener('click', () => timeOut.value = timeIn.value);
  timeOut.addEventListener('click', () => timeIn.value = timeOut.value);
}

const housingParameters = {
  bungalow: 0,
  flat: 1000,
  palace: 10000,
  house: 5000,
};

const validatePrice = () => {
  type.addEventListener('change', () => {
    price.placeholder = housingParameters[type.value];
    price.min = housingParameters[type.value];
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
