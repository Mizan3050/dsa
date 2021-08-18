const arr = [2, 4, 5, 6, 74, 76, 88, 334, 45, 3, 67, 32, 23, 7];

sortedArr = arr.sort(compareFunc)

function compareFunc(a, b) {
    return a - b;
}

function binarySearch(arr, item) {
    low = 0;
    high = arr.length - 1;
    while (low <= high) {
        mid = (low + high)
        guess = arr[mid]
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        } else {
            return null
        }
    }
}

console.log(binarySearch(sortedArr, 67));