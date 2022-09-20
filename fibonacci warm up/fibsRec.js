/**
    creates the fibonacci sequence
    using recursion and prints it out to the console.

    after about an hour or two I was unable to solve this problem
    I found a solution 
    from here:
    https://www.w3resource.com/javascript-exercises/javascript-recursion-function-exercise-6.php
    
    I just slightly modified it and wrote some
    comments to help myself understand it better.

    run "node fibsRect.js" in the terminal
 */
function fibsRec(n){
    if(n>2){
        //recursive step
        /**
         * example call to fibsRec
         * fibsRec(8) is called
         * sequence = fibsRec(8-1);
         * fibsRec(7) is called
         * sequence = fibsRec(7-1)
         * fibsRec(6)
         * sequence = fibsRec(6-1);
         * fibsRec(5)
         * sequence = fibsRec(5-1)
         * fibsRec(4)
         * sequence = fibsRec(4-1);
         * fibsRec(3)
         * sequence = fibsRec(3-1)
         * fibsRec(2)
         * fibsRec(2) = [0,1]
         * 
         * fibsRec(3)
         * sequence = [0,1]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 1
         * sequence[sequence.length-2] = 0
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 1;
         * sequence = [0,1,1];
         * 
         * fibsRec(4)
         * sequence = [0,1,1]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 1
         * sequence[sequence.length-2] = 1
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 2;
         * sequence = [0,1,1,2];
         * 
         * fibsRec(5)
         * sequence = [0,1,1,2]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 2
         * sequence[sequence.length-2] = 1
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 3;
         * sequence = [0,1,1,2,3];
         * 
         * fibsRec(6)
         * sequence = [0,1,1,2,3]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 3
         * sequence[sequence.length-2] = 2
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 5;
         * sequence = [0,1,1,2,3,5];
         * 
         * fibsRec(7)
         * sequence = [0,1,1,2,3,5]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 5
         * sequence[sequence.length-2] = 3
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 8;
         * sequence = [0,1,1,2,3,5,8];
         * 
         * fibsRec(8)
         * sequence = [0,1,1,2,3,5,8]
         * sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2])
         * sequence[sequence.length-1] = 8
         * sequence[sequence.length-2] = 5
         * sequence[sequence.length-1]+sequence[sequence.length-2] = 13;
         * sequence = [0,1,1,2,3,5,8,13];
         * 
         * return sequence
         */
        let sequence = fibsRec(n-1);
        //push into the array the sum of the previous two values
        sequence.push(sequence[sequence.length-1]+sequence[sequence.length-2]);
        return sequence
    } else {
        // base case
        //start of the sequence
        return [0,1];
    }
}

console.log(fibsRec(8),'fibs(8)');