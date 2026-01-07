const fibonacci = function(countArg) {
    //accept strings
    let count;
    if(typeof countArg != Number){
        count = parseInt(countArg);
    } else{
        count = countArg;
    }

    //does not accept negative
    if(count<0) return "OOPS";

    if(count === 0) return 0;

    let firstPrev = 1; // index 0
    let secondsPrev = 1; // index 1

    for(let i = 2 ; i<count ;i++){
        let current = firstPrev + secondsPrev;
        firstPrev = secondsPrev;
        secondsPrev = current;
    }
    return secondsPrev;
};

// Do not edit below this line
module.exports = fibonacci;
