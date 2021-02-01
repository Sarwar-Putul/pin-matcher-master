function getPin() {
    const random = Math.random() * 10000;
    // random = Math.round(random); // এই লাইনের পরিবর্তে  নিচের একুয়েশন করা যায় 
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    };
}
//display generate pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
};
// Handle calculator buttons event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event) {
    const digit = event.target.innertext;
    if (isNan(digit)) {
        //handle backspace event
        //handle clear event
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = ''
        }

    } else {
        const type = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
});
//veryfy pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
        const incorrect = document.getElementById('incorrect-pin');
        correct.style.display = 'none';
    } else {
        const incorrect = document.getElementById('incorrect-pin');
        correct.style.display = 'block';
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'none';
    }
};