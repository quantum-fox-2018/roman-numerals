/*
input: numbers 1 - 3000
process:
output: strings

*/

function toRoman (num) {
  // your implementation code here
  // console.log(String(num)[2]); // 1646 -> 4
  // console.log(String(num).length); // 1
  
  var hasilRoman = '';

  var arrRoman = [
    { angka: 1,
      roman: 'I'},
    { angka: 4,
      roman: 'IV'},
    { angka: 5,
      roman: 'V'},
    { angka: 9,
      roman: 'IX'},
    { angka: 10,
      roman: 'X'},
    { angka: 40,
      roman: 'XL'},
    { angka: 50,
      roman: 'L'},
    { angka: 90,
      roman: 'XC'},
    { angka: 100,
      roman: 'C'},
    { angka: 400,
      roman: 'CD'},
    { angka: 500,
      roman: 'D'},
    { angka: 900,
      roman: 'CM'},
    { angka: 1000,
      roman: 'M'}
  ]


while (num != 0) {
  var angkaMax = arrRoman[0].angka; // 
  var indexMax = 0;
  for (var i = 0; i < arrRoman.length; i++) { // 13 // untuk cari angka terdekat
    if (arrRoman[i].angka <= num && arrRoman[i].angka > angkaMax) {
      angkaMax = arrRoman[i].angka;
      indexMax++;
    }
  }

  // console.log(angkaMax); // 100
  // console.log(indexMax); // 8
  // console.log(arrRoman[indexMax].roman); // C

  hasilRoman += arrRoman[indexMax].roman;
  num -= arrRoman[indexMax].angka;
  
}

return hasilRoman;

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('13    | XIII     | ', toRoman(13))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
