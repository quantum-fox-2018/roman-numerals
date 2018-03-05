function to_roman (num) {
  // your implementation code here
  var hasil = '';

  while (num > 0) {
    if (num >= 1000) {
      num -= 1000;
      hasil += 'M';
    } else if (num >= 500){
      num -= 500;
      hasil += 'D';
    } else if (num >= 400){
      num -= 400;
      hasil += 'CD';
    } else if (num >= 100){
      num -= 100;
      hasil += 'C';
    } else if (num >= 50){
      num -= 50;
      hasil += 'L';
    } else if (num >= 40){
      num -= 40;
      hasil += 'XL';
    } else if (num >= 10) {
      num -= 10;
      hasil += 'X'
    } else if (num === 9) {
      num -= 9;
      hasil += 'IX';
    } else if (num >= 5) {
      num -= 5;
      hasil += 'V';
    } else if (num === 4) {
      num -= 5;
      hasil += 'IV';
    } else {
      num--;
      hasil += 'I';
    }
  }

  return hasil;
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
