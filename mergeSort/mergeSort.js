
/**
  takes in an array
  and returns a sorted array,
  using a recursive merge sort methodology.
*/

/**
 * 
 * description of merge sort from wikipedia
 * An example of merge sort.
 * First, divide the list into the smallest unit (1 element), 
 * then compare each element with the adjacent list
 * to sort and merge the two adjacent lists.
 * Finally, all the elements are sorted and merged.
 *  
 */

//what's the base case?
//what's the recursive step?
// what can be delegated to mergeSort ?
function mergeSort(arr){
  console.log(arr, 'starting array');
    if(arr.length < 2){
      return  arr;
    } else {
      // split array as evenly as possible
      let middleIndexOfArray = Math.ceil(arr.length/2);
      let leftSide = arr.slice(0,middleIndexOfArray);
      let rightSide = arr.slice(middleIndexOfArray,arr.length);

      console.log(leftSide,'l')
      console.log(rightSide,'r')

      // sort left by using merge sort
      let sortedLeftSide = mergeSort(leftSide);

      // sort right using merge sort
      let sortedRightSide = mergeSort(rightSide);

      // merge
      let mergedArray = [];
      
      // 
      console.log('starting to merge sortedLeft and sortedRight');
      
      console.log('arrays before merging');
      console.log(`${sortedRightSide}sr`,`${sortedLeftSide}sl`);

      //loop through leftSide
      //doesn't work with larger array or towards
      //the last merge
      for(let i,n = 0; (sortedLeftSide.length < 0 || sortedRightSide.length < 0); i++){
        if(sortedLeftSide[i] < sortedRightSide[n]){
          mergedArray.push(sortedLeftSide.shift());
        } else {
          mergedArray.push(sortedRightSide.shift());
          n++;
        }
      }


      console.log('arrays after merging');
      console.log(`${sortedRightSide}sr`,`${sortedLeftSide}sl`);
      console.log(mergedArray,'mergedArray')



      //sortedRightSide still has elements left over
      if(sortedRightSide.length > 0){
        //
        console.log('elements left over in rightSide')
        console.log('sortedRightSide',sortedRightSide);
        console.log(sortedLeftSide,'sortedLeftSide');


        //if the last element of the merged array
        //is less than the first element of the 
        //right sorted array 
        if(mergedArray[mergedArray.length-1] < sortedRightSide[0]){
          //then tack the rightSide array to the end of
          //the merged array
          mergedArray.push(...sortedRightSide);

        } else {
          // put sortedRightSide to the start of the mergedArray
          console.log(mergedArray,'ma');
          console.log(sortedRightSide,'sr');
          mergedArray.unshift(...sortedRightSide);
          console.log(mergedArray,'ma');
        }
      }

      if(sortedLeftSide.length > 0){
        //
        console.log('elements left over in leftSide')
        console.log(sortedLeftSide,'sortedLeftSide');
        console.log('sortedRightSide',sortedRightSide);

        if(mergedArray[mergedArray.length-1] < sortedLeftSide[0]){
        //then tack the leftSide array to the end of
        //the merged array
          mergedArray.push(...sortedLeftSide);

        } else if (mergedArray[0] > sortedLeftSide[sortedLeftSide.length-1] ) {
          // put sortedLeftSide to the start of the mergedArray
          console.log(mergedArray,'ma');
          console.log(sortedRightSide,'sr');
          mergedArray.unshift(...sortedLeftSide);
          console.log(mergedArray,'ma');
        }
      }

      console.log(sortedLeftSide,'sl');
      console.log(sortedRightSide,'sr');
      console.log(mergedArray,'mergedArray')

      return mergedArray;
    }
    /**
     * psuedo code from cs50
     * 
     * on input of n elements
     * can create multiple arrays along 
     * the process or bounce values 
     * between only two arrays
     * 
     * if n<2 (base case)
     *  return
     * else (recursive step)
     *  sort the left half of elements
     *  sort right half of elements  
     *  merge sorted havles 
     */

    /**
     * start with whole array:
     * split the selected array evenly as possible
     * select the left sub array
     * 
     * do:
     * if size of array greater than 1
     * split selected array as evenly as possbile
     * and select left side
     * else selected array is of size 1
     * it's ready for merge
     * while:
     * repeat until reaching a selected array
     * of size one
     * 
     * (won't use do while will use recursion)
     * 
     * merging:
     * compare left sub array of size 1
     * against right sub array of size 1
     * select the minimum of the two values
     * add selected to a sorted array
     * when a list becomes empty
     * copy all values from remaining array 
     * into sorted array
     * 
     * 
     * 
     * 
     * 
     * split array into halves
     * 
     */
}

// basic tests
// console.log(mergeSort([1]));
// console.log(mergeSort([2,1]));
// console.log(mergeSort([3,2,1]));
// mergeSort([3,2,1]);
mergeSort([6,5,3,4,2,1]);

// more tests
// console.log(mergeSort([6,4,2,7,3]));
// console.log(mergeSort([0,3,1,6,4,5,2]));
