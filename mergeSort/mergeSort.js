/**
  takes in an array
  and returns a sorted array,
  using a recursive merge sort methodology.
*/

//what's the base case? array of only 1 or 2 item or array.length<2
//what's the recursive step? if array has more than two elements
// what can be delegated to mergeSort, sorting 
function mergeSort(arr) {
  // console.log(arr, "starting array");
  if (arr.length < 2) {
    return arr;
  } else {
    // split array as evenly as possible
    let middleIndexOfArray = Math.ceil(arr.length / 2);
    let leftSide = arr.slice(0, middleIndexOfArray);
    let rightSide = arr.slice(middleIndexOfArray, arr.length);

    // console.log(leftSide, "l");
    // console.log(rightSide, "r");

    // sort left by using merge sort
    let sortedLeftSide = mergeSort(leftSide);

    // sort right using merge sort
    let sortedRightSide = mergeSort(rightSide);

    // merge
    let mergedArray = [];

    
    // console.log("starting to merge sortedLeft and sortedRight");

    // console.log("arrays before merging");
    // console.log(`${sortedRightSide}sr`, `${sortedLeftSide}sl`);

   
    for (
      let l = sortedLeftSide.length, r = sortedRightSide.length;
      l > 0 || r > 0;
    ) {
      /**
       * if sortedLeftSide[l] or
       * sortRightSide[r] is undefined
       * the condition will alway be false
       * so the conditions will only compare
       * values in the two array if both
       * are not empty
       */
      if (sortedLeftSide[l-1] < sortedRightSide[r-1]) {
        mergedArray.push(sortedLeftSide.shift());
        l--;
      }

      if (sortedRightSide[r-1] < sortedLeftSide[l-1]) {
        mergedArray.push(sortedRightSide.shift());
        r--;
      }

      //if right is empty
      if (r == 0 && l > 0) {
        for (let index = 0; index < mergedArray.length; index++) {
          if(sortedLeftSide[0] < mergedArray[index]){
            mergedArray.splice(index,0,sortedLeftSide.shift());
            l--;
          }
          
          if(index == mergedArray.length-1){
            if(sortedLeftSide[0] > mergedArray[index]){
              mergedArray.push(sortedLeftSide.shift());
              l--;
            }
          }
          
        }
      }

      // if left is empty
      if (l == 0 && r > 0) {
        for (let index = 0; index < mergedArray.length; index++) {
          if(sortedRightSide[0] < mergedArray[index]){
            mergedArray.splice(index,0,sortedRightSide.shift());
            r--;
          }
          
          if(index == mergedArray.length-1){
            if(sortedRightSide[0] > mergedArray[index]){
              mergedArray.push(sortedRightSide.shift());
              r--;
            }
          }
          
        }
      }

      // console.log(sortedLeftSide, "sl");
      // console.log(sortedRightSide, "sr");
      // console.log(l, "l");
      // console.log(r, "r");
      // console.log(mergedArray)
    }

    // console.log("arrays after merging");
    // console.log(`${sortedRightSide}sr`, `${sortedLeftSide}sl`);
    // console.log(mergedArray, "mergedArray");

    return mergedArray;
  }
}

//tests
console.log(mergeSort([1]));
console.log(mergeSort([2,1]));
console.log(mergeSort([3,2,1]));
console.log(mergeSort([10,9,8,7,6,5,4,3,2,1]));
console.log(mergeSort([2,6,8,7,9,11,13,15,14,12,10,1,3,5,4,16]));