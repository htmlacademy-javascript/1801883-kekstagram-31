const checkLength = (inputString, needLength) => (inputString.length <= needLength);
checkLength('проверяемая строка', 18);


const isPalindrome = (inputString) => {
  const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = (normalizedString.length - 1); i >= 0; i--) {
    reverseString += normalizedString.at(i);
  }
  return reverseString === normalizedString;
};
isPalindrome('Лёша на полке клопа нашёл ');


const extractNumbers = (inputString) => {
  if ((typeof inputString) === 'number') {
    inputString = inputString.toString();
  }

  let outputNumber = '';

  for (let i = 0; i < inputString.length; i++) {
    if (!Number.isNaN(parseInt(inputString.at(i), 10))) {
      outputNumber += inputString.at(i);
    }
  }

  return parseInt(outputNumber, 10);
};

extractNumbers('1 кефир, 0.5 батона');
extractNumbers(-1.5);
