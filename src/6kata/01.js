function removeParentheses(str) {
    let result = []
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++
            if (count) {
                for (let j = i + 1; count; j++) {
                    if (str[j] === "(") count++
                    if (str[j] === ")") count--
                    i++
                    console.log(count)
                }
            }

        } else {
            result.push(str[i])
        }
    }
    return result.join("")
}

const test = "hello example (words(more words) here) something"
console.log(removeParentheses(test))


//best Practices
function removeParentheses1(s){
    let r = 0
    let x = ''
    for (let c of s) {
        if (c=='(') r++
        if (r==0) x+=c
        if (c==')') r--
    }
    return x
}