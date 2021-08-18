const arr = [0,2,1,1,2,0,1,2,0,1,2,2,2,1,1,2,1,0,2,0,0,1,2,0,1,2,0,0,2,1,2,1,0,2,1];

function sortArray() {
    const zero = arr.filter(zero => zero===0);
    const one  = arr.filter(one => one===1);
    const two = arr.filter(two => two===2);
    return [...zero, ...one, ...two];
}

console.log(sortArray());