const { func1, func2 } = require('../../src/components/comFunc/index');

describe('test func1', () => {
    it('should return a str', () => {
        const arr = ['a', 'b', 'c', 'd'];
        const str = func1(arr);
        expect(str).toBe('a-b-c-d');
    });
});

describe('test func2', () => {
    it('should return a arr', () => {
        const str = 'a-b-c-d';
        const arr = func2(str);
        expect(arr).toEqual(['a', 'b', 'c', 'd']);
    });
});
