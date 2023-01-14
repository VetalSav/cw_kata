function findUniq(arr) {
    const mySet = new Set(arr)
    const resSet = new Set(arr)

    for (let item of mySet) {
        let count = 0;
        for (const it of arr) {
            (item === it) && count++
            if (count === 2) {
                count = 0
                resSet.delete(item)
                break
            }
        }
    }
    return Number([...resSet].join(' '))
}

//console.log(findUniq(tst))

//Best CW
function findUniq2(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}