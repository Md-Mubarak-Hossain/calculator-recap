function inputNumber(elementId) {
    return parseFloat(document.getElementById(elementId).innerText);

}
function inputOperator(elementId) {
    return (document.getElementById(elementId).innerText);
}
function tangentMathOperator(elementId) {
    return document.getElementById(elementId).innerText;

}

// tanget and math function

document.getElementById('log').addEventListener('click', function () {
    document.getElementById('text-field').value += 'Math.' + tangentMathOperator('log') + '(';
    // console.log('Math.' + tangentMathOperator('cos') + '(');

})

document.getElementById('sin').addEventListener('click', function () {
    document.getElementById('text-field').value += 'Math.' + tangentMathOperator('sin') + '(';
    // console.log('Math.' + tangentMathOperator('cos') + '(');

})

document.getElementById('cos').addEventListener('click', function () {
    document.getElementById('text-field').value += 'Math.' + tangentMathOperator('cos') + '(';
    // console.log('Math.' + tangentMathOperator('cos') + '(');

})

document.getElementById('ten').addEventListener('click', function () {
    document.getElementById('text-field').value += 'Math.' + tangentMathOperator('ten') + '(';
    // console.log('Math.' + tangentMathOperator('cos') + '(');

})

// accept digit

document.getElementById('number-1').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-1');

})

document.getElementById('number-2').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-2');

})

document.getElementById('number-3').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-3');

})

document.getElementById('number-4').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-4');

})

document.getElementById('number-5').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-5');

})

document.getElementById('number-6').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-6');

})

document.getElementById('number-7').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-7');

})

document.getElementById('number-8').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-8');

})

document.getElementById('number-9').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-9');

})

document.getElementById('number-0').addEventListener('click', function () {
    document.getElementById('text-field').value += inputNumber('number-0');

})

// accept operator
document.getElementById('operator-(').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('operator-(');

})
document.getElementById('operator-)').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('operator-)');

})
document.getElementById('operator-+').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('operator-+');

})

document.getElementById('operator--').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('operator--');

})

document.getElementById('operator-*').addEventListener('click', function () {
    document.getElementById('text-field').value += '*';

})

document.getElementById('operator-/').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('operator-/');

})

document.getElementById('fact').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('fact');

})

// special operator

document.getElementById('number-dot').addEventListener('click', function () {
    document.getElementById('text-field').value += inputOperator('number-dot');

})
document.getElementById('number-clear').addEventListener('click', function () {
    document.getElementById('text-field').value = '';
})
// get result
function doMath(elementId) {
    if (elementId) {
        const result = document.getElementById('text-field').value;
        return result;
    }
    else {
        return 'math error';
    }

}

document.getElementById('operator-=').addEventListener('click', function () {
    let output = doMath('operator-=');
    // document.getElementById('text-field').value = eval(output);
    document.getElementById('text-field').value = '';
    document.getElementById('text-field').value = eval(output).toFixed(2);
})
