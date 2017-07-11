const React = require("react");
const { mockDOM, unmockDOM, mockAssets, unmockAssets } = require('imitation');
const { test } = require('ava');
const { shallow } = require('enzyme');

var Dice;

test.beforeEach(t => {
    mockAssets();
    mockDOM();

    Dice = require('../src/day3').default;
});


test.afterEach.always(t => {
    unmockDOM();
    unmockAssets();
});


test("it renders without failing", t => {
    let component = shallow(<Dice />);
    t.true(component.html().includes('Fork this'));
});
