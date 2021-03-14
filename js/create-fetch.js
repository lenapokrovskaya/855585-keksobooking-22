import {showAlert} from './util.js';
const createFetch = (onSuccess, onError) => () => {
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
    .catch((err) => {
      onError(err);
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
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    }
  })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
export {createFetch, createSubmit};

