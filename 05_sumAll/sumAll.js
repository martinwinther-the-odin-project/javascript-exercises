const sumAll = function (firstNum, secondNum) {
    if (firstNum < 0 || secondNum < 0 || typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR';
    }
    let sum = 0;
    if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    }
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
