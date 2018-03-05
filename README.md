# Roman Numerals
INISIALISASI roman = ''
IF num LEBIHKECL 1 DAN num LEBIHBESAR 3000
  RETURN 'maksimal 3000 aja ya masih jetlag'
ELSE
  LOOPING SELAMA num>=1000
    roman += 'M'
    num -= 1000

IF num LEBIHBESAR 500
  IF num LEBIHBESAR 900
    roman += 'CM'
    num -= 900
  ELSE
    roman += 'D'
    num -= 500

LOOPING SELAMA num>=100
  IF num LEBIHBESAR 400
    roman += 'CD'
    num -= 400
  ELSE
    roman += 'C'
    num -= 100

IF num LEBIHBESAR 50
  IF num LEBIHBESAR 90
    roman += 'XC'
    num -= 90
  ELSE
    roman += 'L'
    num -= 50

LOOPING SELAMA num LEBIHBESAR 10
  IF num LEBIHBESAR 40
    roman += 'XL'
    num -= 40
  ELSE
    roman += 'X'
    num -= 10

IF num LEBIHBESAR 5
  IF num LEBIHBESAR 9
    roman += 'IX'
    num -= 9
  ELSE
    roman += 'V'
    num -= 5

LOOPING SELAMA num LEBIHBESAR 1
  IF num LEBIHBESAR 4
    roman += 'IV'
    num -= 4
  ELSE
    roman += 'I'
    num -= 1

RETURN roman
