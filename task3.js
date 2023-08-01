function sumArg(argOne) {
    return function(argTwo) {
        return argOne + argTwo;
    }
}
const sum = sumArg(91)(8);
console.log(sum);
sumArg();
