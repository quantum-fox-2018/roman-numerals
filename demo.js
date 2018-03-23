const specialCase = [
    {old:"VIV" ,new:"IX"},
    {old:"LXL" ,new:"XC"},
    {old:"DCD", new:"CM"}
];

function to_roman (num) {
  var resultArr = [];

  var temp = "";
  while(num - 10 >= 0){
    temp += "X";
    num -= 10;
  }
  resultArr.push(temp);

  var temp = "";
  while(num - 9 >= 0){
    temp += "IX";
    num -= 9;
  }
  resultArr.push(temp);

  var temp = "";
  while(num - 5 >= 0){
    temp += "V";
    num -= 5;
  }
  resultArr.push(temp);

  while(num - 4 >= 0){
    temp += "IV";
    num -= 4;
  }
  resultArr.push(temp);


  var temp = "";
  while(num - 1 >= 0){
    temp += "I";
    num -= 1;
  }
  resultArr.push(temp);

  var result =  resultArr.join("");
  return result;
}


// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(7))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
