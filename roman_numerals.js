function to_roman (num) {
  // your implementation code here
  let arrRoman = [];
    while (num > 0) {
        if (num <= 3000 && num >= 1000) {
            let arrRibuan = [];
            arrRibuan.push('M');
            num -= 1000;
            arrRoman.push(arrRibuan.join(''));

        } else if (num < 1000 && num >= 100) {
            let arrRatusan = [];
            if (num >= 400 && num < 500) {
                arrRatusan.push('CD');
                num -= 400;
            } else if (num >= 500 && num < 900) {
                arrRatusan.push('D');
                num -= 500
            } else if (num >= 900 && num < 1000) {
                arrRatusan.push('CM');
                num -= 900;
            } else {
                arrRatusan.push('C');
                num -= 100;
            }
            arrRoman.push(arrRatusan.join(''));

        } else if (num < 100 && num >= 10) {
            let arrPuluhan = [];
            if (num >= 40 && num < 50) {
                arrPuluhan.push('XL');
                num -= 40;
            } else if (num >= 50 && num < 90) {
                arrPuluhan.push('L');
                num -= 50
            } else if (num >= 90 && num < 100) {
                arrPuluhan.push('XC');
                num -= 90;
            } else {
                arrPuluhan.push('X');
                num -= 10;
            }
            arrRoman.push(arrPuluhan.join(''));

        } else if (num < 10) {
            let arrSatuan = [];
            if (num == 4) {
                arrSatuan.push('IV');
                num -= 4;
            } else if (num >= 5 && num < 9) {
                arrSatuan.push('V');
                num -= 5
            } else if (num == 9) {
                arrSatuan.push('IX');
                num -= 9;
            } else {
                arrSatuan.push('I');
                num -= 1;
            }
            arrRoman.push(arrSatuan.join(''));
        }
    }
    return arrRoman.join('');
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
