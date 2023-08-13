const sumAll = function(firstNumb, secondNumb) {
    if(firstNumb<0 || secondNumb<0 || !Number.isInteger(firstNumb) || !Number.isInteger(secondNumb))
        return 'ERROR';
    let smallerNumb = firstNumb<secondNumb ? firstNumb : secondNumb;
    let largerNumb = firstNumb>secondNumb ? firstNumb : secondNumb;
    let sum = 0;
    for(let i=smallerNumb; i<=largerNumb; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
