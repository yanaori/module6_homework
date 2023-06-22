function isPrimeOrNot(num) {
    let result = 'Число простое';
    if (num <= 1 || num > 1000) {
        result = 'Данные не верны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = 'Число составное';
                break;
            }
        }
    }
    console.log(result);
}
isPrimeOrNot(12)


// Вариант 2

function isPrimeOrNot(num) {

    if (num <= 1 || num > 1000) {
        return 'Данные не верны';
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Число составное';
            }
        }

        return 'Число простое';
    }
}
console.log(isPrimeOrNot(10));