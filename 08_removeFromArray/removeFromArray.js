const removeFromArray = function(arr, ...num) {
    return arr.filter((item)=> !num.includes(item) )
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
