const genRandomInteger = (min, max) => {
  const processedMin = Math.ceil(Math.min(min, max));
  const processedMax = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (processedMax - processedMin + 1) + processedMin);
};

const flipCoin = () => Math.round(Math.random());

const getRandomArrayElement = (inputArray) => inputArray[genRandomInteger(0, inputArray.length - 1)];

const getUnicRandomArrayElement = function (inputArray) {
  return () => {
    if (inputArray.length !== 0) {
      const indexElement = genRandomInteger(0, inputArray.length - 1);
      const element = inputArray[indexElement];
      inputArray.splice(indexElement, 1);

      return element;
    }
    return undefined;
  };
};

export{genRandomInteger, flipCoin, getRandomArrayElement, getUnicRandomArrayElement};
