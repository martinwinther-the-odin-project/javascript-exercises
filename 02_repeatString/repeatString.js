const repeatString = function () {
    var num = 3;
    var string = "hey";
    while (num > 0) {
        string += string;
        num - 1;
    }
};

repeatString()
// Do not edit below this line
module.exports = repeatString;
