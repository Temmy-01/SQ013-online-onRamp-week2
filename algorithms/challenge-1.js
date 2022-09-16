function sumOfMultiples(arr) {
   let y = 0
    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] % 3 ==0 || arr[index] % 5 ==0 ) {
            y += arr[index]
            
        } 
        
    }  return y
    
 
}

console.log(sumOfMultiples([6, 3, 0, 30, 7]) ); /*to return 39*/
console.log(sumOfMultiples([9, 3, 21, 30, 7,8,4,2])); /*to return 63*/
console.log(sumOfMultiples([10, 20, 11, 17, 7])); /*to return 30*/
// module.exports = sumOfMultiples
