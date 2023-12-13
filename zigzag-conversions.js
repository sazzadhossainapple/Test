function convert(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    const resultRows = Array.from(
        { length: Math.min(numRows, s.length) },
        () => ''
    );
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        resultRows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }

    return resultRows.join('');
}

const example1 = convert('PAYPALISHIRING', 3);
console.log(example1);

const example2 = convert('PAYPALISHIRING', 4);
console.log(example2);

const example3 = convert('A', 1);
console.log(example3);
