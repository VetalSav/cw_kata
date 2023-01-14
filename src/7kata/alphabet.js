function alphabet(ns) {
    let sortArr = ns.sort((a, b) => a - b)
    const constC = () => {
        if (sortArr[0] * sortArr[1] === sortArr[2]) return sortArr[3]
        else return sortArr[2]
    }
    return sortArr.at(-1)/constC();
}

const tst = [2,3,4,1,12,6,2,4]
console.log(alphabet(tst))
//Bests
function alphabet2(ns) {
    let sorted = ns.sort((a,b) => a - b)
    return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
}