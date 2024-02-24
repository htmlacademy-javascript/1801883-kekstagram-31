// Функция для проверки длины строки.
// eslint-disable-next-line no-unused-vars
const checkLength = (inputString, needLength) => (inputString.length <= needLength);


// Функция для проверки, является ли строка палиндромом
// eslint-disable-next-line no-unused-vars
function isPalindrome(inputString) {
  const normalizedString = inputString.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = (normalizedString.length - 1); i >= 0; i--) {
    reverseString += normalizedString.at(i);
  }
  return reverseString === normalizedString;
}
/* Проверка
console.log(isPalindrome('топот'));                      // true
console.log(isPalindrome('ДовОд'));                      // true
console.log(isPalindrome('Кекс'));                       // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true*/


// Функция извлечения цифр из строки
// eslint-disable-next-line no-unused-vars
function extractNumbers(inputString) {
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
}
/* Проверка
console.log(extractNumbers('2023 год'));            // 2023
console.log(extractNumbers('ECMAScript 2022'));     // 2022
console.log(extractNumbers('1 кефир, 0.5 батона')); // 105
console.log(extractNumbers('агент 007'));           // 7
console.log(extractNumbers('а я томат'));           // NaN
console.log('-----------');
console.log(extractNumbers(2023));                  // 2023
console.log(extractNumbers(-1));                    // 1
console.log(extractNumbers(1.5));                   // 15*/
