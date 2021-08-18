let array = [22, 45,55,7,9,5,44,2,66,33,7,43,4,75,43];
let min = array[0];
let max = 0;
let secMax = 0;

function maxElement() {
    for(let i = 1; i<array.length; i++) {
        if(array[i]>max) {
            secMax = max;
            max = array[i];
        }
        else if(array[i]<min){
            min = array[i];
        }
    }
}

maxElement();
console.log(min, max, secMax);