
export const disemvowel = (str) => {
    const start_vowels = new Set('aeiouAEIOU');
    let result = '';
    for (const symbol of str) {
        if(!start_vowels.has(symbol)) result += symbol
        ;
    }
    return result;
}

//best Practices
//1
function disemvowel1(str) {
    return str.replace(/[aeiou]/gi, '');
}
//2
const disemvowel2 = str => str.replace(/[aeiou]/gi,'');
//3
function disemvowel3(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}
//4
const vowels = 'aeiou';

function disemvowel4(str) {
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}