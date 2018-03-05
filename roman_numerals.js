function to_roman (num) {
  // var arrKamus = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']]
  // var arrDipecah = []
  // console.log(arrKamus.length)
  // for(var i=0; i<arrKamus.length; i++){
  //   if(num>=arrKamus[i][0]){
  //     arrDipecah.push(arrKamus[i][0])
  //     num-=arrKamus[i][0]
  //     i = 0
  //   }
  // }
  // console.log(arrDipecah)

  var roman = ''
  if(num<1 && num>3000){
    return 'maksimal 3000 aja ya masih jetlag'
  }
  else{
    while(num>=1000){
      roman += 'M'
      num -= 1000
    }
  }

  if(num>=500){
    if(num>=900){
      roman += 'CM'
      num -= 900
    }
    else {
      roman += 'D'
      num -= 500
    }
  }

  while(num>=100){
    if(num>=400){
      roman += 'CD'
      num -= 400
    }
    else {
      roman += 'C'
      num -= 100
    }
  }

  if(num>=50){
    if(num>=90){
      roman += 'XC'
      num -= 90
    }
    else {
      roman += 'L'
      num -= 50
    }
  }

  while(num>=10){
    if(num>=40){
      roman += 'XL'
      num -= 40
    }
    else {
      roman += 'X'
      num -= 10
    }
  }

  if(num>=5){
    if(num>=9){
      roman += 'IX'
      num -= 9
    }
    else {
      roman += 'V'
      num -= 5
    }
  }

  while(num>=1){
    if(num>=4){
      roman += 'IV'
      num -= 4
    }
    else {
      roman += 'I'
      num -= 1
    }
  }

  return roman
}


// Drive code
// console.log(to_roman(1453))
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
