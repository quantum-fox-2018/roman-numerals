function to_roman (num) {
  var angka = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romawi = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var result = '';
  for (var i = 0; i <= angka.length; i++) { // looping untuk mengecek angka decimal dengan index i sepanjang decimal
    while (num >= angka[i]) { // memmbuat batasan looping dari perbandingan num dan variable decimal dengan pengulanagn index i
      //console.log(num, decimal[i]);
      result += romawi[i]; // memasukkan angka romawi sesuai angaka decimal index i
      //console.log('=='+result);
      num -= angka[i]; // mengurangi num dengan angka decimal index i
      //console.log('++'+num);
    }
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
