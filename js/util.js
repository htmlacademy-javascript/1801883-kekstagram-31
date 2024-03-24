const genRandomInteger = (min, max) => {
  const processedMin = Math.ceil(Math.min(min, max));
  const processedMax = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (processedMax - processedMin + 1) + processedMin);
};

const flipCoin = () => Math.round(Math.random());

const getRandomArrayElement = (inputArray) => inputArray[genRandomInteger(0, inputArray.length - 1)];

const getUnicRandomArrayElement = (inputArray) => function () {
  if (inputArray.length !== 0) {
    const indexElement = genRandomInteger(0, inputArray.length - 1);
    const element = inputArray[indexElement];
    inputArray.splice(indexElement, 1);

    return element;
  }
  return undefined;
};

const generateComment = ({avatar, message, name}) => {
  const textLi = '<li class="social__comment">';
  const textImg = `<img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">`;
  const textP = `<p class="social__text">${message}</p></li>`;

  return textLi + textImg + textP;
};


export{ genRandomInteger, flipCoin, getRandomArrayElement, getUnicRandomArrayElement, generateComment };
