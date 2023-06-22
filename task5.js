const pow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
        //     result *= x;
        result = x ** n;
    }
    return result;
}
let x = 10;
let n = 2;

if (n < 1) {
    console.log(`${n} не натуральное число, введите натуральное`)
} else {
    console.log(pow(x, n))
}