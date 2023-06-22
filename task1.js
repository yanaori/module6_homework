let arr = [1, 1, 9, 0, 5, 4, null, undefined];
function definingArrayElements() {
    let zeroValue = 0;
    let numberValue = 0;
    let evenValue = 0;
    let oddValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            numberValue++;
            if (arr[i] === 0) {
                zeroValue++;
            } else if (arr[i] % 2 === 0) {
                evenValue++;
            } else {
                oddValue++;
            }
        }
    }
    console.log(`В массиве: ${numberValue} цифр, ${zeroValue} нулей, ${evenValue} чётных чисел, ${oddValue} нечётных чисел.`)
};
definingArrayElements();