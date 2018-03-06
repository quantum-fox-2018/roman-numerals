//Roman Numerals
function under10(num, roman){

  if(num < 5){
      if(num === 4){
          roman += 'IV';
      }else{
          for(let i = 1; i <= num ;i++){
              roman += 'I';
          }
      }
  }else if (num < 10) {
    if(num === 5){
        roman += 'V';
    }else if (num === 9) {
        roman += 'IX';
    }else{
        roman += 'V';
        for(let i = 6; i <= num ;i++){
            roman += 'I';
        }
    }
  }

  return roman;
}

function under50(num, roman){
    if(num < 50){
        if(num === 10){
            roman += 'X';
        }else if (num >= 40 && num <49) {
            if(num === 40){
                roman += 'XL';

            }else{
                roman += 'XL';
                return under10(num-40, roman);
            }
        }else if(num === 49) {
            roman += 'XLIX';
        }else {
            while(num >= 10){
                num -= 10;
                roman += 'X';
            }
            if(num !== 0){
                return under10(num, roman);
            }
        }
    }
    return roman;

}

function under100(num, roman){
    if(num < 100){
        if(num === 50){
            roman = 'L';
        }else if (num >= 90 && num <= 99) {
            if(num === 90){
                roman += 'XC';

            }else{
                roman += 'XC';
                return under50(num-90, roman);
            }
        }else {
            while(num >= 50){
                num -= 50;
                roman += 'L';
            }
            if(num !== 0){
                return under50(num, roman);
            }
        }
    }
    return roman;

}

function under500(num, roman){
  if(num < 500){
      if(num === 100){
          roman = 'C';
      }else if (num >= 400 && num <= 499) {
          if(num === 400){
              roman += 'CD';

          }else{
              roman += 'CD';
              return under100(num-400, roman);
          }
      }else {
          while(num >= 100){
              num -= 100;
              roman += 'C';
          }
          if(num !== 0){
              return under100(num, roman);
          }
      }
  }
  return roman;
}

function under1000(num, roman){
  if(num < 1000){
      if(num === 500){
          roman = 'D';
      }else if (num >= 900 && num <= 999) {
          if(num === 900){
              roman += 'CM';

          }else{
              roman += 'CM';
              return under500(num-900, roman);
          }
      }else {
          while(num >= 500){
              num -= 500;
              roman += 'D';
          }
          if(num !== 0){
              return under500(num, roman);
          }
      }
  }
  return roman;
}

function above1000(num, roman){
  if(num >= 1000){
      if(num === 1000){
          roman = 'M';
      }else {
          while(num >= 1000){
              num -= 1000;
              roman += 'M';
          }
          if(num !== 0){
              return under1000(num, roman);
          }
      }
  }
  return roman;
}

function to_roman(num){
    let roman = '';
    if(num < 10){
        return under10(num, roman);
    }else if (num < 50) {
        return under50(num, roman);
    }else if (num < 100) {
        return under100(num, roman);
    }else if (num < 500) {
        return under500(num, roman);
    }else if(num < 1000) {
        return under1000(num, roman);
    }else {
        return above1000(num, roman);
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
