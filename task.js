// TASK - 1
// -----------------------------------------------------------------
function getArrayParams(...arr){
    let min = arr[0]
    let max = arr[0]
    let sum = arr.reduce((acc,elem) => acc + elem)
    let avg = sum / arr.length
    console.log("min:", Math.min(...arr), "max:", Math.max(...arr), "avg:", +avg.toFixed(2))
}
// TASK - 2
// ----------------------------------------------------------------------
function summElementsWorker(...arr){
    let sum = arr.reduce((acc,elem) => acc + elem)
    return sum
}
let differenceMaxMinWorker = (...arr) => Math.max(...arr) - Math.min(...arr)
function differenceEvenOddWorker(...arr){
    let sumEvenElement = 0
    let sumOddElement = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]
    } else {
        sumOddElement += arr[i]
    }
}
if (sumOddElement === 0) {
    return sumEvenElement;
} else {
    return sumEvenElement - sumOddElement;
}
}

function averageEvenElementsWorker(...arr){
    let sumEvenElement = 0
    let countEvenElement = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            sumEvenElement += arr[i]
            countEvenElement++
        }
    }
    return sumEvenElement / countEvenElement
}
// TASK - 3
// ---------------------------------------------------------------------------
function makeWork(arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
        maxWorkerResult = result;
    }
}
    return maxWorkerResult;
}