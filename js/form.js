//import {mapAddress} from './map.js';

//Деактивация формы
const deactivateForm = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  const formElements = form.querySelectorAll('fieldset');
  //console.log(formElements);

  for (let i = 0; i < formElements.length; i++) {
    //console.log(formElements[i]);
    formElements[i].setAttribute('disabled', '');
  }
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  const mapFiltersSelect = mapFilters.querySelectorAll('select');
  //console.log(mapFiltersSelect);

  for (let i = 0; i < mapFiltersSelect.length; i++) {
    //console.log(mapFiltersElements[i]);
    mapFiltersSelect[i].setAttribute('disabled', '');
  }
  ///
  const mapFiltersFieldset = mapFilters.querySelector('fieldset');
  mapFiltersFieldset.setAttribute('disabled', '');
  const mapFiltersFieldsetInput = mapFiltersFieldset.querySelectorAll('input');

  for (let i = 0; i < mapFiltersFieldsetInput.length; i++) {
    //console.log(mapFiltersElements[i]);
    mapFiltersFieldsetInput[i].setAttribute('disabled', '');
  }
};
//Активация формы
const activateForm = () => {
  const formActive = document.querySelector('.ad-form');
  formActive.classList.remove('ad-form--disabled');
  const formActiveElements = formActive.querySelectorAll('fieldset');
  for (let i = 0; i < formActiveElements.length; i++) {
    //console.log(formElements[i]);
    formActiveElements[i].removeAttribute('disabled', '');
  }
  const mapActiveFilters = document.querySelector('.map__filters');
  mapActiveFilters.classList.remove('map__filters--disabled');
  const mapActiveFiltersSelect = mapActiveFilters.querySelectorAll('select');
  //console.log(mapFiltersSelect);

  for (let i = 0; i < mapActiveFiltersSelect.length; i++) {
    //console.log(mapFiltersElements[i]);
    mapActiveFiltersSelect[i].removeAttribute('disabled', '');
  }
  const mapFiltersActiveFieldset = mapActiveFilters.querySelector('fieldset');
  mapFiltersActiveFieldset.removeAttribute('disabled', '');
  const mapFiltersActiveFieldsetInput = mapFiltersActiveFieldset.querySelectorAll('input');

  for (let i = 0; i < mapFiltersActiveFieldsetInput.length; i++) {
    //console.log(mapFiltersElements[i]);
    mapFiltersActiveFieldsetInput[i].removeAttribute('disabled', '');
  }
};


//Задание 5.2

const mainform = document.querySelector('.ad-form');
const timeIn = mainform.querySelector('#timein');
const timeOut = mainform.querySelector('#timeout');

//Oпция для времени заезда и выезда

const validationTime = () => {
  timeIn.addEventListener('click', () => timeOut.value = timeIn.value);
  timeOut.addEventListener('click', () => timeIn.value = timeOut.value);
}

validationTime();


export {deactivateForm, activateForm};
