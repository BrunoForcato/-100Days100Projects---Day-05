let result = '';

function appendToResult(value) {
    if (isOperator(value) && isOperator(result[result.length - 1])) {
        return;
    }
    if (result.length >= 20) {
        alert("Character limit exceeded!");
        return;
    }

    if (result === 'Result') {
        result = value;
    } else {
        result += value;
    }
    updateResult();
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function updateResult() {
    if (!result || result === '') {
        result = 'Result';
    }
    document.querySelector('.result').innerText = result;
}

function clearResult() {
    result = 'Result';
    updateResult();
}

function deleteLast() {
    if (result.length > 0 && result != 'Result') {
        result = result.slice(0, -1);
        updateResult();
    }
}

function calculate() {
    try {
        if (!isValidExpression(result)) {
            result = 'Invalid Expression';
            updateResult();
            return;
        }
        result = eval(result);
        result = result.toString();
        updateResult();
    } catch (error) {
        result = 'Erro';
        updateResult();
    }
}

function isValidExpression(expr) {
    if (isOperator(expr[expr.length - 1])) {
        return false;
    }
    for (let i = 0; i < expr.length - 1; i++) {
        if (isOperator(expr[i]) && isOperator(expr[i + 1])) {
            return false;
        }
    }
    return true;
}
