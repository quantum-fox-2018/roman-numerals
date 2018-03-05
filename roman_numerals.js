function toRoman (num) {
  let objRoman = [
    {angka: 1, romawi:'I'},
    {angka: 4, romawi:'IV'},
    {angka: 5, romawi:'V'},
    {angka: 9, romawi:'IX'},
    {angka: 10, romawi:'X'},
    {angka: 40, romawi:'XL'},
    {angka: 50, romawi:'L'},
    {angka: 90, romawi:'XC'},
    {angka: 100, romawi:'C'},
    {angka: 400, romawi:'CD'},
    {angka: 500, romawi:'D'},
    {angka: 900, romawi:'CM'},
    {angka: 1000, romawi:'M'},
  ];
  
  let catchRoman = '';
  
  for(let i=objRoman.length-1; i>=0; i--){
    if(num >= objRoman[i].angka){
      num -= objRoman[i].angka;
      catchRoman += objRoman[i].romawi;
      i++;
    }
  }
  
  return catchRoman;

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

// module.exports = toRoman
