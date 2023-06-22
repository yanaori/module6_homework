function getDoubleFunction(argOne) {
    let result;
    if (typeof argOne === "number" && !isNaN(argOne)) {
        result = (argTwo) => argOne + argTwo;
    } else {
        result = (argTwo) => "Ошибка ввода";
    }
    return result;
}
let sumArg = getDoubleFunction(-4)(1);
console.log(sumArg)