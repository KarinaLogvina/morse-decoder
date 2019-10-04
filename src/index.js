const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var morzeExpr = "";
    for (let i = 0; i < expr.length/2; i++) { 
        var temp = expr.slice(i*2, i*2+2);
        if (temp == "00") {
            morzeExpr += " ";
        } 
        if (temp == "10") {
            morzeExpr += ".";
        }
        if (temp == "11") {
            morzeExpr += "-";
        }
        if (temp == "**") {
            morzeExpr += " ";
        }
    }
    var resultExpr = "";
    for (let i = 0; i < morzeExpr.length/5; i++) { 
        var temp = morzeExpr.slice(i*5, i*5+5); 
        if (temp == "     ") {
            resultExpr += " ";
        } else {
            temp = temp.trim();
            resultExpr += MORSE_TABLE[temp];
        }
    }
    return resultExpr;
}

module.exports = {
    decode
}