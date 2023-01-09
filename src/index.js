module.exports = function toReadable (number) {
  let result = '';
  
  const one = {
                '0' : 'zero',
                '1' : 'one',
                '2' : 'two',
                '3' : 'three',
                '4' : 'four',
                '5' : 'five',
                '6' : 'six',
                '7' : 'seven',
                '8' : 'eight',
                '9' : 'nine'
              };
  
  const two_X0 = {
                '20' : 'twenty',
                '30' : 'thirty',
                '40' : 'forty',
                '50' : 'fifty',
                '60' : 'sixty',
                '70' : 'seventy',
                '80' : 'eighty',
                '90' : 'ninety'
              };
  
  const two_1X = {
                '10' : 'ten',
                '11' : 'eleven',
                '12' : 'twelve',
                '13' : 'thirteen',
                '14' : 'fourteen',
                '15' : 'fifteen',
                '16' : 'sixteen',
                '17' : 'seventeen',
                '18' : 'eighteen',
                '19' : 'nineteen'
              };
  
  number = number.toString();
  number = number.split('');
  
  if (number.length === 1) {
    return funcOne(number);
  } else if (number.length === 2) {
    return funcTwo(number);
  } else if (number.length === 3) {
    if (number[1] === '0' && number[2] !== '0') {
      result = one[number[0]] + ' hundred ' + one[number[2]]
    } else if (number[1] === '0' && number[2] === '0') {
      result = one[number[0]] + ' hundred';
    } else {
      result = one[number[0]] + ' hundred ' + funcTwo(number.splice(1,2))
    }
    return result;
  } 
  
  function funcOne(number) {
    return one[number[0]];
  }
  
  function funcTwo(number) {
    
    if (number[0] === '1') {
      number = number.join('');
      result = two_1X[number];
    } else if (number[0] !== '1' && number[1] === '0') {
      number = number.join('');
      result = two_X0[number];
    } else {
      result = two_X0[number[0] + '0'] + ' ' + one[number[1]];
    }
    
    return result;
  }
  
  return result;
}
