const alphabet = "abcdefghijklmnopqrstuvwxyz";
function alphabetPosition(text) {
    let result = [];
    for (let i = 0; i < text.length; i++) {
      let letter = text[i].toLowerCase();
      if (alphabet.includes(letter)) {
        result.push(alphabet.indexOf(letter) + 1);
      }
    }
    return result.join(" ");
 }

  console.log(alphabetPosition('developer'));
  console.log(alphabetPosition('decadev'));
  console.log(alphabetPosition('sucess'));
  
  module.exports = alphabetPosition

  