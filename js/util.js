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
    if (getRandomInt(0, 2)) {
      return;
    }
    newArray.push(element);
  })
  return newArray;
}

export {getRandomInt, getRandomFloat, getRandomArray, getRandomArrayElement}
