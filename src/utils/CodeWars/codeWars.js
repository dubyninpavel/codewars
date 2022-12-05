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

export default zeros1;
