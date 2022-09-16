
/**
 * Using iteration,
 * write a function fibs
 * which takes a number and returns an array
 * containing that many numbers from the fibonacci sequence.
 * Using an example input of 8,
 * this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
 */
function fibs(n){
    let before;
    let next;
    let sum;
    let sequence = [];

    for(let i = 0; i<n; i++){
       if(i<1){
        before = i;
        next = i+1
        sequence.push(i);
       } else {
        sequence.push(next);
        sum = before+next;
        before = next;
        next = sum;
       }
    }
    return sequence
}

// console.log(fibs(1),'fibs(1)');
// console.log(fibs(2),'fibs(2)');
// console.log(fibs(3),'fibs(3)');
// console.log(fibs(4),'fibs(4)');
// console.log(fibs(5),'fibs(5)');
// console.log(fibs(6),'fibs(6)');
// console.log(fibs(7),'fibs(7)');
console.log(fibs(8),'fibs(8)');
// console.log(fibs(100),'fibs(100)');