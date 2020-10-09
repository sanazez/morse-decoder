const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let number = expr.length / 10;
    let numStart = 0;
    let numEnd = 10;
    let result = '';
    for (let i = 0; i < number; i++) {
        let strMorze = '';
        let str = expr.slice(numStart, numEnd);
        if (str === '**********') {
            result += ' ';
        } else {
            let count = 0;
            for (let k = 0; k < 5; k++) {
                let subString = str.slice(count, count + 2);
                if (subString == '10') {
                    strMorze += '.';
                } else if (subString == '11') strMorze += '-';
                count += 2;
            }
            result += MORSE_TABLE[strMorze];
        }
        numEnd += 10;
        numStart += 10;
    }
    return result;
}

module.exports = {
    decode
}