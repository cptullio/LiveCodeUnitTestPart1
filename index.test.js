const sum = require('./index.js');

test('Verify Sum Function',()=>{
    expect(sum(1,3)).toBe(4);
});