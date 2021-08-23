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
  let arr = [];
  for(let i = 0; i < expr.length; i += 10) {
    arr.push(expr.substr(i, 10));
  }

  let arr2 = [];
  arr.forEach(elem => {
    let str = [];
    for(let i = 0; i < elem.length; i += 2) {
      str.push(elem.substr(i, 2).split());
    }
    arr2.push(str.map(item => item.join()));
  });

  let obj = {
    "00": " ",
    "10": ".",
    "11": "-",
    "**": "**"
  };
  
  arr2.forEach(element => {
    for(let i = 0; i < element.length; i++) {
      for (let key of Object.keys(obj)) {
        if(key === element[i]) {
          element[i] = obj[key];
        }
      }
    }
  });
  arr2 = arr2.map(item => item.join('').trim());
  let string = [];
  arr2.forEach(element => {
    if(element === '**********') {
      element = ' ';
      string.push(element);
    }
    for (const key of Object.keys(MORSE_TABLE)) {
      if(key === element) {
        element = MORSE_TABLE[key];
        string.push(element);
      }
    }
  });
  return string.join('');
}

module.exports = {
    decode
}