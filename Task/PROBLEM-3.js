// With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

function seriesNum(a){
    let arr = [];
    let count = a % 2 === 0 ? a-1 : a
    for(let i=0;i<count;i++){
        arr.push(2*i+1)
    }
    return arr
}

// const a = 1
// const a = 2
// const a = 3 
// const a = 4
// const a = 5
   const a = 6

console.log(seriesNum(a))