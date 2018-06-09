const storejs = require('../store');
const assert = require('chai').assert

var store;
describe('module', () => {
    before(() => {
        storejs().then((m) => { store = m;});
    })

    it('default', () => {
        var v = store._retrieve_value();
        assert.equal(v, 42);
    });

    it('store example', () => {
        store._store_value(100);
        v = store._retrieve_value();
        assert.equal(v, 100);
    });
});