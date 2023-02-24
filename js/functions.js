// //Функция для проверки длины строки.

const checkLength = (text, wordLength) => {
    return text.length <= wordLength
   };
   
   document.write(checkLength('парапрапаам', 20) + '<br>');
   document.write(checkLength('Здраствуйтедарова', 5) + '<br>');
   
//Функция для проверки, является ли строка палиндромом. 

   
const checkPalindrome = (string) => {
    string = string.split(' ').join('').toLowerCase();
    for (let i = 0; i < string.length / 2; i++)
    if (string[i] !== string [string.length - 1 - i]) 
     return false
    return true;
        
};
document.write(checkPalindrome('топот') + '<br>'); // true
document.write(checkPalindrome('hello') + '<br>'); // false
document.write(checkPalindrome('Лёша на полке клопа нашёл ') + '<br>'); // true   





// Функция, которая извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN.


function extractNumbers(inputStr) {
    const digits = inputStr.match(/\d/g);
    if (digits === null) {
      return NaN;
    }
    return parseInt(digits.join(''));
  }



  document.write(extractNumbers('2023 год') + '<br>');            // 2023
  document.write(extractNumbers('ECMAScript 2022') + '<br>');     // 2022
  document.write(extractNumbers('1 кефир, 0.5 батона')); // 105
  document.write(extractNumbers('агент 007') + '<br>');           // 7
  document.write(extractNumbers('а я томат') + '<br>');           // NaN


//   Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.




//Черновик ао заданию 2
// const checkingPalindrome = (string) => {
//     for (let i = 0; i < string.length / 2; i++)
//      {
//       string[i] === string [string.length -1 -i];
//        console.log (string[i]);
//        console.log (string[string.length -1 -i]);
//      };
//      return;
//  }

// const checkingPalindrome = (string) => {
//     for (let i = 0; i < string.length / 2; i++) 
//     return string[i]
// };

//  console.log(checkingPalindrome("топот"))