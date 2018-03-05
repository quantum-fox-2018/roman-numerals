//Roman Numerals

function toRoman(num){
  var hasil = '';

  while(num >= 1000 ){
    hasil += 'M';
    num -= 1000;
  }

  if(num === 900){
    hasil += 'CM';
    num -= 900;
  }else {
    while(num >= 500){
      hasil += 'D';
      num -= 500;
    }
  }

  if(num >= 400){
    hasil += 'CD';
    num -= 400;
  }else {
    while(num >= 100){
      hasil += 'C';
      num -= 100;
    }
  }

  if(num >= 90){
    hasil += 'XC';
    num -= 90;
  }else{
    while(num >= 50){
      hasil += 'L';
      num -= 50;
    }
  }


  if(num >= 40){
    hasil += 'XL';
    num -= 40;
  }else{
    while(num >= 10){
      hasil += 'X';
      num -= 10;
    }
  }

  if(num === 9){
    hasil += 'IX';
    num -= 9;
  }else{
    while (num >= 5) {
      hasil += 'V';
      num -= 5;
    }
  }


  if(num === 4){
    hasil += 'IV';
  }else{
    while(num >= 1){
      hasil += 'I';
      num -= 1;
    }
  }

  return hasil;
}

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('------|----------|--------');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));
