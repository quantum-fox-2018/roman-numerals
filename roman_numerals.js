const pecahanRoman = [
  {value:1000, label:"M"},
  {value:900, label:"CM"},
  {value:500, label:"D"},
  {value:400, label:"CD"},
  {value:100, label:"C"},
  {value:90, label:"XC"},
  {value:50, label:"L"},
  {value:40, label:"XL"},
  {value:10, label:"X"},
  {value:9, label:"IX"},
  {value:5, label:"V"},
  {value:4, label:"IV"},
  {value:1, label:"I"},]

function to_roman(input) {
  // start your code here
  var resultArr = [];
  for (var i = 0; i < pecahanRoman.length; i++) {
    var temp = "";
    while(input - pecahanRoman[i].value >= 0){
      temp += pecahanRoman[i].label;
      input -= pecahanRoman[i].value;
    }
    resultArr.push(temp);
  }

  return resultArr.join("")
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
