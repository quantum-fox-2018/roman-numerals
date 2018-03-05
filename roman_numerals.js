function to_roman (num) {
  // your implementation code here
  //CARA ARRAY
  // let arrRoman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  // let arrValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

  // let convertRoman = '';
  // for(let i = arrValue.length-1; i>=0; i--) {
  //   if(num - arrValue[i] >= 0) {
  //     convertRoman += arrRoman[i];
  //     num -= arrValue[i]
  //     i++
  //   }
  // }
  // return convertRoman ;

  //CARA OBJECT
  let objRoman = [{
    roman: 'I',
    value: 1
  },{
    roman: 'IV',
    value: 4
  },{
    roman: 'V',
    value: 5
  },{
    roman: 'IX',
    value: 9
  },{
    roman: 'X',
    value: 10
  },{
    roman: 'XL',
    value: 40
  },{
    roman: 'L',
    value: 50
  },{
    roman: 'XC',
    value: 90
  },{
    roman: 'C',
    value: 100
  },{
    roman: 'CD',
    value: 400
  },{
    roman: 'D',
    value: 500
  },{
    roman: 'CM',
    value: 900
  },{
    roman: 'M',
    value: 1000
  }]

  let convertRoman = '';
  for(let i = objRoman.length-1; i>=0; i--) {
    if(num - objRoman[i].value >= 0) {
      convertRoman += objRoman[i].roman;
      num -= objRoman[i].value;
      i++
    }
  }
  return convertRoman

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
