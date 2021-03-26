import {showAlert} from './util.js';
import {showError} from './notification.js';
const createFetch = (onSuccess) => () => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Произошла ошибка запроса данных с сервера. Попробуйте ещё раз');
    });
};

const createSubmit = (formData, onSuccess) => {
  return fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body: formData,
  }).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      showError();
    }
  })
    .catch(() => {
      showError();
    });
};
export {createFetch, createSubmit};

