function validParentheses(str) {
    let countParentheses_Op = 0
    let countParentheses_CL = 0
    if (str[0] === ")" || str[str.length - 1] === "(") {
        return false
    }

        for (let i = 0; i < str.length; i++) {
            if (countParentheses_CL > countParentheses_Op){
                console.log("hello")
                return false
            }
            if (str[i] === "(") {
                countParentheses_Op++
            } else if ((str[i] === ")")) {
                countParentheses_CL++
            }
        }
    return (!(countParentheses_Op - countParentheses_CL))
}

const test = "()()(())()()()()"
console.log(validParentheses(test))

//best Practices

function validParentheses2(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] === '(') n++;
        if (parens[i] === ')') n--;
        if (n < 0) return false;
    }
    return n == 0;
}
//best Practices
function validParentheses3(parens){
    var indent = 0;

    for (var i = 0 ; i < parens.length && indent >= 0; i++) {
        indent += (parens[i] === '(') ? 1 : -1;
    }

    return (indent === 0);
}