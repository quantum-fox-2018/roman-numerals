function to_roman (num) {
  var resultArr = [];

  var temp = "";
  while(num - 1000 >= 0){
    temp += "M";
    num -= 1000;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 900 >= 0){
    temp += "CM";
    num -= 900;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 500 >= 0){
    temp += "D";
    num -= 500;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 400 >= 0){
    temp += "CD";
    num -= 400;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 100 >= 0){
    temp += "C";
    num -= 100;
  }
  resultArr.push(temp);

  temp = "";
  while( num - 90 >= 0){
    temp += "XC"
    num -= 90;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 50 >= 0){
    temp += "L";
    num -= 50;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 40 >= 0){
    temp += "XL";
    num -= 40;
  }
  resultArr.push(temp);

  temp = "";
  while(num - 10 >= 0){
    temp += "X";
    num -= 10;
  }
  resultArr.push(temp);

  temp = "";
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

  var temp = "";
  while(num - 4 >= 0){
    temp += "IV";
    num -= 4;
  }
  resultArr.push(temp)

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
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
