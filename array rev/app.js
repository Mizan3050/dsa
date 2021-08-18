

let array = [4,2,3,5,6,8,1]; //1,8,6,5,3,2,4
let start = 0;
let end = array.length-1;

function sortArray(){
    if(start <= end ){
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
        sortArray();
    }
}

sortArray();
console.log(array);