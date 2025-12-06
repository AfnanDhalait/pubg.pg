function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator!";
    }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '*')); // 50
