function to_roman (num) {
  var roman = ["M","D","CD","C","L","XL","X","IX","V","IV","I"];
  var angka = [1000,500,400,100,50,40,10,9,5,4,1];
  var hasil  = '';


  for(var i = 0 ; i < roman.length ; i++){
    while(num >= angka[i]){
      hasil += roman[i];
      num -= angka[i];
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
