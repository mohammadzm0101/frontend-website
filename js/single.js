// 
let num = [0, 1, 4, 9]
let num1 = num.at(3)
console.log(num1)
let testNumber = 3
comparison()
function comparison() {
    let result;
    if (testNumber > num1) {
        result = 'true'
    } else {
        result = 'false'
    }
    console.log(result)
}