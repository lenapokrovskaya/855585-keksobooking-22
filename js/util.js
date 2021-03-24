const ALERT_SHOW_TIME = 5000;

const getRandomFloat = (min, max, decimal) => {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  }
  return (Math.random() * (max - min) + min).toFixed(decimal);
}

getRandomFloat(1, 10, 4);

const getRandomInt = (min, max) => {
  if (max < min || min < 0) {
    throw new RangeError('диапазон может быть только положительный, включая ноль, значение «до» не может быть меньшее, чем значение «от»');
  }
  return Math.floor(Math.random() * (max - min)) + min;
}
/*global _:readonly*/
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (getRandomInt(0, 2)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {getRandomInt, getRandomFloat, getRandomArray, getRandomArrayElement, showAlert}
