export function html_encode(input, radix = 10) {
    let result = '';
    if (typeof input !== 'string') {
        throw new Error('html_encode(input) input must be a string');
    }
    for (let i = 0; i < input.length; i++) {
        let codePoint = input.codePointAt(i);
        if (radix === 16) {
            result += getHexRef(codePoint);
        } else {
            result += getDecimalRef(codePoint);
        }
    }
    return result;
}

// 最简单的办法是直接把 input 插入到 HTML 中
export function html_decode(input) {
    console.log(input)
}

/**
 * decimal numeric character references
 */
function getDecimalRef(codePoint) {
    return '&#' + codePoint + ';';
}

/**
 * hexadecimal numeric character references
 */
function getHexRef(codePoint) {
    return '&#x' + codePoint.toString(16) + ";";
}

