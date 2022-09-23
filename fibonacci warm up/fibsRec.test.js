const fibsRec = require('./fibsRec.js');

test('test fibsRec',()=>{
    expect(fibsRec(8)).toEqual([0,1,1,2,3,5,8,13]);
})