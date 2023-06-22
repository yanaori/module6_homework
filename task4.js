function everySecondValue(numberOne, numberTwo) {
    let value = numberOne;
    let timer = setInterval(function () {
        console.log(value);
        if (value === numberTwo) {
            clearInterval(timer);
        }
        value++;
    }, 1000);
}
everySecondValue(5, 15);