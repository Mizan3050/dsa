const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

function reArrangeArray() {
    let negative = arr.filter(neg => neg < 0);
    let positive = arr.filter(pos => pos > 0);

    return [...negative, ...positive];
}

console.log(reArrangeArray());