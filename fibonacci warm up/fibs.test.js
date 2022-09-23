const fibs = require('./fibs.js');

test('test fibs', ()=>{
    expect(fibs(8)).toEqual([0,1,1,2,3,5,8,13]);
});