/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    let seenDigit = false;
    let seenDot = false;
    let seenExponent = false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= '0' && char <= '9') {
            // Цифра может быть как в мантиссе, так и в экспоненте.
            seenDigit = true;
        } else if (char === '+' || char === '-') {
            // Знак разрешён либо в самом начале,
            // либо сразу после e/E.
            const isAtStart = i === 0;
            const isAfterExponent =
                i > 0 && (s[i - 1] === 'e' || s[i - 1] === 'E');

            if (!isAtStart && !isAfterExponent) {
                return false;
            }
        } else if (char === '.') {
            // Точка не может быть второй и не может находиться после e/E.
            if (seenDot || seenExponent) {
                return false;
            }

            seenDot = true;
        } else if (char === 'e' || char === 'E') {
            // Экспонента допустима только один раз
            // и только после числа с хотя бы одной цифрой.
            if (seenExponent || !seenDigit) {
                return false;
            }

            seenExponent = true;

            // Теперь ожидаем минимум одну цифру в экспоненте.
            seenDigit = false;
        } else {
            return false;
        }
    }

    // Гарантирует:
    // - наличие цифры в обычном числе;
    // - наличие цифры после e/E, если экспонента была.
    return seenDigit;
};