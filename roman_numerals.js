function to_roman (num) {
  // your implementation code here
  let strNum = String(num)
  let result = ''

  if (+(strNum) > 1000) {

    for (var i = 0; i < +(strNum[0]); i++) {

      result += 'M'

    }

    strNum= strNum.slice(1)

  }

  if (+(strNum) < 1000 && +(strNum) >= 900) {

    result += 'CM'

  } else if (+(strNum) < 900 && +(strNum) >= 500) {

    result += 'D'
    strNum = String(+(strNum) - 500)

  }

  if (+(strNum) < 500 && +(strNum) >= 400) {

    result += 'CD'

    strNum= strNum.slice(1)

  }

  if (+(strNum) >= 100 && +(strNum) < 400) {

    for (var i = 0; i < +(strNum[0]); i++) {
      result += 'C'
    }

    strNum= strNum.slice(1)

  }

  if (+(strNum) < 100 && +(strNum) >= 90) {

    result += 'XC'

  }

  if (+(strNum) < 90 && +(strNum) > 50) {

    result += 'L'
    strNum = String(+(strNum) - 50)

  }

  if (+(strNum) < 50 && +(strNum) >= 40) {
    result += 'XL'
    strNum= strNum.slice(1)
  }

  if (+(strNum) < 40 && +(strNum) >= 10) {

    for (var i = 0; i < +(strNum[0]); i++) {

      result += 'X'

    }

    strNum= strNum.slice(1)

  }else if (+(strNum) == 9) {

    result += 'IX'

  }else if (+(strNum) < 9 && +(strNum) >= 5) {

    result += 'V'

    strNum = String(+(strNum) - 5)

  }else if (+(strNum) == 4) {

    result += 'IV'

  }

  if (+(strNum) < 4 && +(strNum) >=1) {

    for (var i = 0; i < +(strNum); i++) {
      result += 'I'
    }

  }

  return result

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
