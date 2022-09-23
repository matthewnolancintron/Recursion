// import test from "node:test";
// import mergeSort from "./mergeSort.js";

const mergeSort = require('./mergeSort.js');

test('test merge sort',()=>{
    expect(mergeSort([2,1])).toEqual([1,2]);
    expect(mergeSort([3,2,1])).toEqual([1,2,3]);
    expect(mergeSort([10,9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(mergeSort([2,6,8,7,9,11,13,15,14,12,10,1,3,5,4,16])).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
});
