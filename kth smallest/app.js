let arr = [5,9,32,11,24,35,3,7,27]

let length = arr.length;
const k = 3;

function kthMinElement(arr, n, k){
    arr.sort((a,b) => a-b);
    return arr[k-1];
}

console.log(kthMinElement(arr, length, k));