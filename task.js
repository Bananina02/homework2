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