function sumOfTwoSmallestNums(arr){
    let n = 0
    arr.sort((a,b) => a - b);
    return n = arr[0] + arr[1]
        
}

console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]));
console.log(sumOfTwoSmallestNums([12,34,23,12,67]));
console.log(sumOfTwoSmallestNums([999,234,567,78,2]));

// module.exports = sumOfTwoSmallestNums
