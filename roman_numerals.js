/*
function to_roman parameter num
 1. Buat variable decimal sama dengan array dengan isi nilai 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
 2. Buat variable roman sama dengan array dengan isi nilai 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
 3. Baut variable  hasil sama dengan string kosong
 4. LOOP index i sama dengan nol, index i kurang dari panjang array decimal dan index i pertambahan 1
    5. Buat kondisi adalah parameter num lebih besar sama dengan decimal index i maka
      6. hasil sama dengan hasil ditambah hasil ditambah roman index i
      7. parameter num sma dengan parameter num dikurang decimal index i
    end LOOP
  8. return hasil
end function
 */
function to_roman (num) {
  // your implementation code here
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var hasil = '';
  for (var i = 0; i <= decimal.length; i++) {
    while (num >= decimal[i]) {
      hasil += roman[i];
      num -= decimal[i];
    }
  }
  return hasil;
}

// Drive code
console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|———————');
console.log('4     | IV       | ', to_roman(4));
console.log('9     | IX       | ', to_roman(9));
console.log('13    | XIII     | ', to_roman(13));
console.log('1453  | MCDLIII  | ', to_roman(1453));
console.log('1646  | MDCXLVI  | ', to_roman(1646));
