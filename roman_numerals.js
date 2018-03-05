function to_roman (num) {
  // your implementation code here
  var hasil = '';
  var romanArray = [
      [1000, 'M'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [1, 'I']
    ];

  while (num > 0) {
    for (var i = 0; i < romanArray.length; i++) {
      if (num >= romanArray[i][0]) {
        num -= romanArray[i][0];
        hasil += romanArray[i][1];
      }
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
