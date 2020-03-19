function convertToRoman(num) {
  //i think the length matters but maybe this is unnecessary
  // console.log(num.toString().length);
  let digits = num
    .toString()
    .split("")
    .map(x => parseInt(x, 10));
  console.log(digits);
  let arr = [];
  let lastDigit = digits[digits.length - 1];
  let tenthPlace = digits[digits.length - 2];
  let hundredthPlace = digits[digits.length - 3];

  if (num >= 1000) {
    let thousandth = Math.floor(num / 1000);
    for (let i = 0; i < thousandth; i++) {
      arr.push("M");
    }
  }

  //hundredth place
  if (hundredthPlace <= 3) {
    for (let i = 0; i < hundredthPlace; i++) {
      arr.push("C");
    }
  } else if (hundredthPlace === 4) {
    arr.push("CD");
  } else if (hundredthPlace > 4 && hundredthPlace < 9) {
    arr.push("D");
    for (let i = 1; i <= hundredthPlace - 5; i++) {
      arr.push("C");
    }
  } else if (hundredthPlace === 9) {
    arr.push("CM");
  }
  //tenth place
  if (tenthPlace <= 3) {
    for (let i = 0; i < tenthPlace; i++) {
      arr.push("X");
    }
  } else if (tenthPlace === 4) {
    arr.push("XL");
  } else if (tenthPlace > 4 && tenthPlace < 9) {
    arr.push("L");
    if (tenthPlace - 5 > 0) {
      for (let i = 1; i < tenthPlace - 5; i++) {
        arr.push("X");
      }
    }
  } else if (tenthPlace === 9) {
    arr.push("XC");
  }

  //this is always going to be the last digit
  if (lastDigit <= 3) {
    for (let i = 0; i < lastDigit; i++) {
      arr.push("I");
    }
  } else if (lastDigit === 4) {
    arr.push("IV");
  } else if (lastDigit > 4 && lastDigit < 9) {
    arr.push("V");
    if (lastDigit - 5 > 0) {
      for (let i = 1; i <= lastDigit - 5; i++) {
        arr.push("I");
      }
    }
  } else if (lastDigit === 9) {
    arr.push("IX");
  }
  console.log(arr);
  return arr.join("");
}

console.log(convertToRoman(2) + " should return II");
console.log(convertToRoman(3) + " should return III");
console.log(convertToRoman(4) + " should return IV");
console.log(convertToRoman(5) + " should return V");
console.log(convertToRoman(9) + " should return IX");
console.log(convertToRoman(12) + " should return XII");
console.log(convertToRoman(16) + " should return XVI");
console.log(convertToRoman(29) + " should return XXIX");
console.log(convertToRoman(44) + " should return XLIV");
console.log(convertToRoman(45) + " should return XLV");
console.log(convertToRoman(68) + " should return LXVIII");
console.log(convertToRoman(83) + " should return LXXXIII");
console.log(convertToRoman(97) + " should return XCVII");
console.log(convertToRoman(99) + " should return XCIX");
console.log(convertToRoman(400) + " should return CD");
console.log(convertToRoman(500) + " should return D");
console.log(convertToRoman(501) + " should return DI");
console.log(convertToRoman(649) + " should return DCXLIX");
console.log(convertToRoman(798) + " should return DCCXCVIII");
console.log(convertToRoman(891) + " should return DCCCXCI");
console.log(convertToRoman(1000) + " should return M");
console.log(convertToRoman(1004) + " should return MIV");
console.log(convertToRoman(1006) + " should return MVI");
console.log(convertToRoman(1023) + " should return MXXIII");
console.log(convertToRoman(2014) + " should return MMXIV");
console.log(convertToRoman(3999) + " should return MMMCMXCIX");
