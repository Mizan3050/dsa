const arr1 = [2,3,4,5,1,6];
const arr2 = [2,3,4,5,8,1,7]

function findUnion() {
    const array2 = [...arr1];
    // arr2.forEach(x => 
    //     arr2.forEach(
    //         y => {
    //             if(x!=y){
    //                 array2.push(y);
    //             }
    //         }
    //     )
    // )
    return array2;
}
findUnion();
console.log(findUnion());