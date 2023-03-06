/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = `${x}`
    let arr = str.split('')
    let emp = []
    for(let i=0; i<arr.length; i++) {
        emp = [arr[i], ...emp]
    }
    return emp.join('') === arr.join('') ? true : false
}