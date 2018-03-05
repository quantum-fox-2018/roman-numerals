function to_roman (num) {
  // your implementation code here
  var arrRoman = [];
  while(num >= 1000){
    arrRoman.push('M');
    num -= 1000;
  }

  while(num >= 900){
    arrRoman.push('CM');
    num -= 900;
  }

  while(num >= 500){
    arrRoman.push('D');
    num -= 500;
  }

  while (num >= 400){
    arrRoman.push('CD');
    num -= 400;
  }

  while(num >= 100){
    arrRoman.push('C');
    num -= 100;
  }

  while (num >= 90){
    arrRoman.push('XC');
    num -= 90;
  }

  while(num >= 50){
    arrRoman.push('L');
    num -= 50;
  }

  while (num >= 40){
    arrRoman.push('XL');
    num -= 40;
  }

  while(num >= 10){
    arrRoman.push('X');
    num -= 10;
  }

  while (num >= 9){
    arrRoman.push('IX');
    num -= 9;
  }

  while(num >= 5){
    arrRoman.push('V');
    num -= 5;
  }

  while (num >= 4){
    arrRoman.push('IV');
    num -= 4;
  }

  while(num >= 1){
    arrRoman.push('I');
    num -= 1;
  }

  var strRoman = arrRoman.join('');
  return strRoman;
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
