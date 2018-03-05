function to_roman (num) {
  // your implementation code here
  var arrNum = [ [1, "I"], [4, "IV"], [5, "V"], [9, "IX"], [10, "X"], [40, "XL"], [50, "L"], [90, "XC"],
    [100, "C"], [400, "CD"], [500, "D"], [900, "CM"], [1000, "M"] ];
  var str = "";
  while(num > 0) {
    for(var n = arrNum.length-1; n >=0 ;n--) {
      if(num >= arrNum[n][0]) {
        str += arrNum[n][1];
        num -= arrNum[n][0];
      }
    }
  }
  return str;
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
