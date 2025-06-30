// Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]

function multipleOfNum(arr1,arr2){
    let count = {};
    const m = arr1.length;
    const n = arr2.length;

    for(let i=0;i<n;i++){
        count[arr2[i]] = 0
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<m;j++){
            if(arr1[i] % arr2[j] === 0){
                count[arr2[j]] += 1
            }
        }
    }
    return count
}

const arr1 = [1,2,8,9,12,46,76,82,15,20,30]
const arr2 = [1,2,3,4,5,6,7,8,9]
console.log(multipleOfNum(arr1,arr2))