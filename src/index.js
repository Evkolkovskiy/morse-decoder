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
    let exprWhithoutSpaces = expr.split('**********'); //выводим массив разбитый на элементы между закодированными пробелами (т.е получили массив из закодированных слов)
    let exprToWords = exprWhithoutSpaces.map(function(codeOfWord) {
        let word = '';
        for (let i = 0; i < codeOfWord.length; i = i + 10) {
            let numberToSign = '';
            let letter = codeOfWord.slice(i, i+10);                         //берем букву, т.е 10 символов
            for (let j = letter.length-1; j >= 0; j = j - 2) {              //пробегаемся по коду буквы и удаляем нули, меняем 10 и 11 на символы
                if ((letter[j-1] + letter[j]) === '10') {
                    numberToSign = '.' + numberToSign;
                }
                if (letter[j-1] + letter[j] === '11') {
                    numberToSign = '-' + numberToSign;
                }
            }
            word += MORSE_TABLE[numberToSign];                              //составляем слово из ьаблицы
        }
        return word;
    });
    let result = exprToWords.join(' ');                                     //объдиняем элементы из массива в строку
    return result;

}

module.exports = {
    decode
}