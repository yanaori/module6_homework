function isPrimeOrNot(num) {
    let result = 'Число простое';
    if (num > 1000) {
        result = 'Данные не верны';
    } else if (num === 0 || num === 1) {
        result = 'Число не является ни простым, ни составным'
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = 'Число составное';
                break;
            }
        }
    }
    console.log(result);
}
isPrimeOrNot(1001)


// Вариант 2

function isPrimeOrNot(num) {
    if (num > 1000) {
        return 'Данные не верны';
    } else if (num === 0 || num === 1) {
        return 'Число не является ни простым, ни составным'
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Число составное';
            }
        }
        return 'Число простое';
    }
}
console.log(isPrimeOrNot(1));
