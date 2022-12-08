/* eslint-disable quote-props */
/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const isSquare = (n) => {
  if (n > 0) {
    return Number.isInteger(Math.sqrt(n)) || false;
  }
  return false;
};

const min = (list) => {
  if (list) {
    let resultMin = list[0];
    list.forEach((num) => {
      if (resultMin > num) {
        resultMin = num;
      }
    });
    return resultMin;
  }
  return console.log('Arr is empty');
};

const max = (list) => {
  if (list) {
    let resultMin = list[0];
    list.forEach((num) => {
      if (resultMin < num) {
        resultMin = num;
      }
    });
    return resultMin;
  }
  return console.log('Arr is empty');
};

const descendingOrder = (n) => {
  const arr = String(n).split('').sort((a, b) => b - a);
  return Number(arr.join(''));
};

const positiveSum = (arr) => arr.reduce((sum, currentValue) => (currentValue > 0 ? sum + currentValue : sum), 0);

const disemvowel = (str) => str.replace(/[aAeEiIoOuU]/gi, '');

const oddOrEven = (arr) => {
  const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
};

const validParentheses = (str) => {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (bracket === '(') {
      stack.push(bracket);
    } else {
      const removeBracket = stack.pop();
      if (removeBracket === undefined) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const validBraces = (str) => {
  const stack = [];
  const typeOfBracket = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];

    if (bracket === '(' || bracket === '{' || bracket === '[') {
      stack.push(bracket);
    } else {
      const removeBracket = stack.pop();
      if (bracket !== typeOfBracket[removeBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const isPangram = (str) => {
  const objLetter = {};
  const regex = /[a-zA-Z]/;
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i].toLowerCase();
    if (regex.test(currentLetter)) {
      objLetter[currentLetter] = true;
    }
  }
  return Object.keys(objLetter).length === 26;
};

// ! Альтернатива isPangram
/*
const isPangram1 = (str) => {
  const currentStr = str.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every((currentLetter) => currentStr.indexOf(currentLetter) !== -1);
};
*/

const findNb = (heightCubes) => {
  let sum = heightCubes;
  for (let n = 0; ; n++) {
    if (sum > 0) {
      const currCubeVol = (n + 1) ** 3;
      sum -= currCubeVol;
    } else if (sum === 0) {
      return n;
    } else if (sum < 0) {
      return (-1);
    }
  }
};

const printerError = (str) => {
  const regex = /[a-m]/;
  let countError = 0;
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (!regex.test(currentLetter)) {
      countError++;
    }
  }
  return `${countError}/${str.length}`;
};

/*
const obj1 = {
  flour: 500, sugar: 200, eggs: 1,
};
const obj2 = {
  flour: 1200, sugar: 1200, eggs: 5, milk: 200,
};
*/

const cakes = (recipe, available) => {
  const arrIngredients = Object.keys(recipe);
  let countCakes;

  for (let i = 0; i < arrIngredients.length; i++) {
    const currentIngredient = arrIngredients[i];
    const cake = Math.floor(available[currentIngredient] / recipe[currentIngredient]);
    if (available[currentIngredient] === undefined || cake < 1) {
      countCakes = 0;
      break;
    }
    if (i === 0) {
      countCakes = cake;
    } else if (countCakes > cake) {
      countCakes = cake;
    }
  }
  return countCakes;
};

const findOdd = (arrNumber) => {
  const obj = {};
  let number;

  arrNumber.forEach((num) => {
    if (!obj[num]) {
      obj[num] = 0;
    }
    obj[num] += 1;
  });

  const arrKeys = Object.keys(obj);

  for (let i = 0; i < Object.keys(obj).length; i++) {
    if ((obj[arrKeys[i]] % 2) !== 0) {
      number = arrKeys[i];
    }
  }
  return Number(number);
};

// const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const findOdd1 = (xs) => xs.reduce((a, b) => {
  console.log(a ^ b);
  return a ^ b;
});

const pigIt = (str) => {
  const arrWords = str.split(' ');
  const regex = /[a-zA-Z]/;
  let strPig = '';

  for (let i = 0; i < arrWords.length; i++) {
    if (regex.test(arrWords[i])) {
      const sum = `${arrWords[i].slice(1)}${arrWords[i][0]}ay`;
      strPig += `${sum} `;
    } else {
      strPig += `${arrWords[i]} `;
    }
  }

  return strPig.trim();
};

// eslint-disable-next-line no-useless-escape
const pigIt1 = (str) => str.replace(/(\w)(\w*)(\s|$)/g, '\$2\$1ay\$3');

// const zeros = (n) => {
//   let countZero = 0;

//   const divisionNumberFive = (number) => {
//     let counter = 0;
//     const result = number / 5;
//     counter += 1;

//     if (result % 5 === 0) {
//       counter += divisionNumberFive(result);
//     }

//     return counter;
//   };

//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0) {
//       countZero += divisionNumberFive(i);
//     }
//   }

//   return countZero;
// };

const zeros = (n) => {
  let countZero = 0;
  const k = Math.log10(n) / Math.log10(5);

  for (let i = 1; i <= k; i++) {
    countZero += Math.floor(n / (5 ** i));
  }

  return countZero;
};

const zeros1 = (n) => {
  let zs = 0;
  while (n > 0) {
    // eslint-disable-next-line no-param-reassign
    n = Math.floor(n / 5);
    zs += n;
  }
  return zs;
};

const example = (num) => {
  const a = num + 1;
  return a;
};

// Задача про числа Фибоначчи

// eslint-disable-next-line consistent-return
const productFib = (prod) => {
  const arr = [0, 1];

  for (let i = 2; i <= prod; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    if ((arr[i - 1] * arr[i - 2]) === prod) {
      return [arr[i - 2], arr[i - 1], true];
    }
    if ((arr[i - 1] * arr[i - 2]) > prod) {
      return [arr[i - 2], arr[i - 1], false];
    }
  }
};

// Альтернатива
const productFib1 = (prod) => {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
};

// Задача про время

const humanReadable = (seconds) => {
  const hour = Math.floor(Math.floor(seconds / 60) / 60);
  const minute = Math.floor(Math.floor(seconds / 60) % 60);
  const second = seconds % 60;

  function checkTime(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }

  return `${checkTime(hour)}:${checkTime(minute)}:${checkTime(second)}`;
};

// Задача про повторение символов в строке

const firstNonRepeatingLetter = (str) => {
  const obj = {};
  let string = '';

  for (let i = 0; i < str.length; i++) {
    const currentWord = str[i].toLowerCase();
    if (!obj[currentWord]) {
      obj[currentWord] = str[i];
      continue;
    }
    obj[currentWord] += currentWord;
  }

  for (const key in obj) {
    if (obj[key].length === 1) {
      string = obj[key];
      break;
    }
  }

  return string;
};

// Альтернатива
const firstNonRepeatingLetter1 = (str) => {
  for (const i in str) {
    if (str.match(new RegExp(str[i], 'gi')).length === 1) {
      return str[i];
    }
  }
  return '';
};

// Задача про веревод из 32 бит в IP

const int32ToIp = (int32) => {
  let int2 = (int32 >>> 0).toString(2);

  while (int2.length !== 32) {
    int2 = `0${int2}`;
  }

  const arr = [
    int2.slice(0, 8),
    int2.slice(8, 16),
    int2.slice(16, 24),
    int2.slice(24, 32),
  ];

  const ip = arr.map((num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i] * (2 ** ((num.length - 1) - i));
    }
    return sum;
  });

  return `${ip[0]}.${ip[1]}.${ip[2]}.${ip[3]}`;
};

// Альтернатива

const int32ToIp1 = (int32) => `${((int32 >> 24) & 0xFF)}.${((int32 >> 16) & 0xFF)}.${((int32 >> 8) & 0xFF)}.${((int32) & 0xFF)}`;

// Задача про стороны света

// const arr = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];

const dirReduc = (arr) => {
  const rules = {
    'NORTH': 'SOUTH',
    'WEST': 'EAST',
    'SOUTH': 'NORTH',
    'EAST': 'WEST',
  };
  const finalDirection = [];

  for (let i = 0; i < arr.length; i++) {
    const currentDirection = arr[i];
    if (finalDirection.at(-1) === rules[currentDirection]) {
      finalDirection.pop();
    } else {
      finalDirection.push(currentDirection);
    }
  }

  return finalDirection;
};

export default dirReduc;
