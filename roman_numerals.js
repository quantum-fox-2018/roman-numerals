function to_roman (input) {
  var numRom = [{num:1000,rom:'M'},{num:900,rom:'CM'},{num:500,rom:'D'},{num:400,rom:'CD'},
                {num:100,rom:'C'},{num:90,rom:'XC'},{num:50,rom:'L'},{num:40,rom:'XL'},
                {num:10,rom:'X'},{num:9,rom:'IX'},{num:5,rom:'V'},{num:4,rom:'IV'},
                {num:1,rom:'I'}];
  var roman = '';
  for(let i=0;i<numRom.length;i++){
    if(input >= numRom[i].num){
      input -= numRom[i].num;
      roman += numRom[i].rom;
      i--;
    }
  }
  return roman;
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
