function to_roman (num) {
  var result = '';
  while (num > 0) {
    if (num >= 1000) { num -= 1000; result = result + 'M';}
    else if (num >= 900) { num -= 900; result = result + 'CM';}
    else if (num >= 500) { num -= 500; result = result + 'D';}
    else if (num >= 400) { num -= 400; result = result + 'CD';}
    else if (num >= 100) { num -= 100; result = result + 'C';}
    else if (num >= 90) { num -= 90; result = result + 'XC';}
    else if (num >= 50) { num -= 50; result = result + 'L';}
    else if (num >= 40) { num -= 40; result = result + 'XL';}
    else if (num >= 10) { num -= 10; result = result + 'X';}
    else if (num >= 9) { num -= 9; result = result + 'IX';}
    else if (num >= 5) { num -= 5; result = result + 'V';}
    else if (num >= 4) { num -= 4; result = result + 'IV';}
    else if (num < 4) { num -= 1; result = result + 'I';}
  }

  return result;
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
