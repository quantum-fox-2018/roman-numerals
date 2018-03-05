/*
SET variable library dengan value array dengan value = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],
[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

CREATE function toRoman dengan parameter sebuah angka bernama num

  SET variable sisa dengan nilai num
  SET variable str dengan string kosong

  DO looping dari nilai i = 0 hingga panjang library, setiap iterasi i+1
    SELAMA variable sisa masih lebih besar dari nilai library i index 0 maka
      SET variable sisa dikurang library i index 0
      SET variable str ditambah dengan library i index 1

kembalikan nilai str */

var library = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],
[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']]

function to_roman (num) {
  var sisa = num
  var str = ''

  for (var i = 0; i < library.length; i++) {

    while (sisa >= library[i][0] ) {
      sisa -= library[i][0]
      str += library[i][1]
    }
  }
  return str
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
