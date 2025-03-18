
const calc = document.getElementById('calc');
const display = document.getElementById('display');

calc.addEventListener('click', () => {
    try {
        if (display.value[0] === '0') {
            let leadingZeros = 0;
            for (let ch of display.value) {
                if (ch === '0') {
                    leadingZeros++;
                }
                else {
                    break;
                }
            }
            if (display.value.slice(leadingZeros).length > 0) {
                display.value = eval(display.value.slice(leadingZeros));
            }
            else {
                display.value = '';
            }
        }
        else {
            if (eval(display.value) === undefined) {
                throw(e);
            }
            else {
                display.value = eval(display.value);
            }
        }
    }
    catch(e) {
        display.value = "Error!";
        setTimeout(() => display.value = '', 1000);
    }
});


