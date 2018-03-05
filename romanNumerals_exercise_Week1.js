function toRoman(latin){

  var arabicNumber = [1,5,10,50,100,500,1000];
  var romanNumber = ['I','V','X','L','C','D','M'];
  var stringLatin = latin.toString();
  var arrUrai = [];
  var romanResult = '';
  var counter=0;
  var stringResult = '';
  var resultNumb = 0;
  var arrAwal = [];


  for(counter=0;counter<stringLatin.length;counter++){
    arrUrai.push(parseInt(stringLatin[counter])*(Math.pow(10,stringLatin.length-1-counter)));
    arrAwal.push(parseInt(stringLatin[counter]));
  }

  for(counter=0;counter<arrUrai.length;counter++){

    resultNumb = arrUrai[counter];
    romanResult = '';
    similar =0;

    for(counterDalam=0;counterDalam<arabicNumber.length && resultNumb>0;counterDalam++){

      while(resultNumb>=arabicNumber[arabicNumber.length-1-counterDalam]){
        romanResult = romanResult + romanNumber[romanNumber.length-1-counterDalam];
        resultNumb = resultNumb - arabicNumber[arabicNumber.length-1-counterDalam];
        similar++;
      }

    }

    if(similar>3){
      romanResult = '';
      if(arrAwal[counter]>5){
        romanResult = romanResult + romanNumber[romanNumber.length-counterDalam]+romanNumber[romanNumber.length+2-counterDalam];
      }
      else{
        romanResult = romanResult + romanNumber[romanNumber.length-counterDalam]+romanNumber[romanNumber.length+1-counterDalam];
      }

    }

    stringResult = stringResult + romanResult;
  }

  if(latin<=3000){
    return stringResult;
  }
}

console.log('4     | IV       | ',toRoman(4));
console.log('9     | IX       | ',toRoman(9));
console.log('23    | XXIII    | ',toRoman(23));
console.log('1453  | MCDLIII  | ',toRoman(1453));
console.log('1646  | MDCXLVI  | ',toRoman(1646));
