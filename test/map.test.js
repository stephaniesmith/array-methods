const assert = require('assert');
const map = require('../lib/map');

describe('map', () => {

    it('return', () => {
        const arr = [1, 2, 3, 4];
        const doubled = item => item * 2;
        const mapped = map(arr, doubled);
        assert.deepEqual(mapped, [2, 4, 6, 8]);
    });
});