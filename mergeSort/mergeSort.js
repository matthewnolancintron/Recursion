
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
    /*
      sort the left half of the array (n>1)
      sort the right half of the array (n>1)
      merge halves together
    */

    /**
     *  sorting the left side:
     *  break array down in to
     *  split array in half again
     *  until each half is a
     *  single element array or 2 element arrays 
     * 
     *  sort 2 element arrays by comparaing values
     *  when sorted merge with any single element arrays
     *  compare single element with first and last value
     *  of 2 element array to see which element/array 
     *  becomes the first element of the merged array
     *  do until left side is sorted
     *  do it recursivlly
     */

    /**
     * sorting the right side:
     * same as what was done on the left
     */

    /**
     * merge left and right side of the sorted arrays
     * by comparing values from start of left side array
     * lowest value against the next value in the leftside 
     * array and value from the right side array
     * plaing them into a new array lowest value
     * elements are placed first
     */


}