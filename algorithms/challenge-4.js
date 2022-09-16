function squareDigit(str) {
   let y = ''
    for (let i = 0; i < str.length; i++) {
        y += Math.pow(Number(str[i]), 2);
       
        
    } return String(y)
 }
 console.log(squareDigit('9119'));
 console.log(squareDigit('289'));
 console.log(squareDigit('345'));
 console.log(squareDigit('7772'));
//   module.exports =squareDigit
