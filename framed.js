const textString = "Megaklinikka Software Developer test";

function framWords(str) {
    const splitedText = str.split(' ');
    const maxWidth = Math.max(...splitedText.map(w => w.length));
    const stars = '*'.repeat(maxWidth + 4); // compensate for two characters on botg sides of the string
    const arr = [];
    splitedText.forEach(txt => arr.push(
        `* ${txt} *\n`
    ));
    const framedWord = `${stars}\n${arr.join('')}${stars}`;
    framedWord
    return framedWord;
}


framWords(textString);
