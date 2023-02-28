//Функция для проверки длины строки.

const checkLength = (text, wordLength) => text.length <= wordLength;

//Функция для проверки, является ли строка палиндромом.

const checkPalindrome = (string) => {
  string = string.split(' ').join('').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string [string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Функция, которая извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const extractNumbers = (inputStr) => {
  const digits = inputStr.match(/\d/g);
  if (digits === null) {
    return NaN;
  }
  return parseInt(digits.join(''), 10);
};

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

function addFirstChars(str, minLength, extraChars) {
  if (str.length >= minLength) {
    return str;
  }
  let result = '';
  const numExtraChars = Math.ceil((minLength - str.length) / extraChars.length);
  for (let i = 0; i < numExtraChars; i++) {
    result = extraChars.slice(0, minLength - str.length - result.length) + result;
  }
  result += str;
  return result;
}

checkLength();
checkPalindrome();
extractNumbers();
addFirstChars();
