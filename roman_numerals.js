function to_roman (num) {
  // your implementation code here
  function satuan(satuan){
    if(satuan === 5){
      return 'V';
    } else {
      if(satuan === 9){
        return 'IX';
      }
      if(satuan < 5){
        if (satuan === 4){
          return 'IV';
        } else {
          var tampung = '';
          for(var i = 1; i<=satuan; i++){
            tampung += 'I';
          }
          return tampung;
        }
      }
      if (satuan > 5){
        var tampung = 'V';
        for(var i = 6; i <= satuan; i++){
          tampung += 'I';
        }
        return tampung;
      }
    }
  }

  function puluhan(puluhan){
    if(puluhan === 5){
      return 'L';
    } else {
      if(puluhan === 9){
        return 'XC';
      }
      if(puluhan < 5){
        if (puluhan === 4){
          return 'XL';
        } else {
          var tampung = '';
          for(var i = 1; i<=puluhan; i++){
            tampung += 'X';
          }
          return tampung;
        }
      }
      if (puluhan > 5){
        var tampung = 'L';
        for(var i = 6; i <= puluhan; i++){
          tampung += 'X';
        }
        return tampung;
      }
    }
  }

  function ratusan(ratusan){
    if(ratusan === 5){
      return 'D';
    } else {
      if(ratusan === 9){
        return 'CM';
      }
      if(ratusan < 5){
        if (ratusan === 4){
          return 'CD';
        } else {
          var tampung = '';
          for(var i = 1; i<=ratusan; i++){
            tampung += 'C';
          }
          return tampung;
        }
      }
      if (ratusan > 5){
        var tampung = 'D';
        for(var i = 6; i <= ratusan; i++){
          tampung += 'C';
        }
        return tampung;
      }
    }
  }

  function ribuan(ribuan){
    if (ribuan === 1){
      return 'M'
    }
  }

  var str = num.toString();
  if (str.length === 1){
    var num = Number(str[0]);
    return satuan(num);
  } else if (str.length === 2){
    var tampung = '';
    var num1 = Number(str[1]);
    var num2 = Number(str[0]);
    tampung  = puluhan(num2) + satuan(num1);
    return tampung;
  } else if (str.length ===3){
    var tampung = '';
    var num1 = Number(str[2]);
    var num2 = Number(str[1]);
    var num3 = Number(str[0]);
    tampung  = ratusan(num3) + puluhan(num2) + satuan(num1);
    return tampung;
  } else {
    var tampung = '';
    var num1 = Number(str[3]);
    var num2 = Number(str[2]);
    var num3 = Number(str[1]);
    var num4 = Number(str[0]);
    tampung  = ribuan(num4) + ratusan(num3) + puluhan(num2) + satuan(num1);
    return tampung;
  }
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
