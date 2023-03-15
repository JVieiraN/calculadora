const buttons = document.querySelectorAll('button');
        const display = document.querySelector('input');
        let operand1 = '';
        let operand2 = '';
        let operator = '';

        buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (isNaN(value)) {
            switch (value) {
                case '+':
                case '-':
                case '*':
                case '/':
                operator = value;
                operand1 = display.value;
                display.value = '';
                break;
                case '=':
                operand2 = display.value;
                display.value = eval(`${operand1} ${operator} ${operand2}`);
                break;
                case 'clear':
                display.value = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                break;
            }
            } else {
            display.value += value;
            }
        });
        });