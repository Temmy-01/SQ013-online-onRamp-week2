function accum(str) {
    return str.split('').map((x, i) => x.toUpperCase() + Array(i + 1).join(x.toLowerCase())).join('-');
        
 }

 console.log(accum("abcd")); /*"A-Bb-Ccc-Dddd"*/
 console.log(accum("RqaEzty")); /*"A-Bb-Ccc-Dddd"*/
 console.log(accum("cwAt")); /*"A-Bb-Ccc-Dddd"*/
//   module.exports =accum