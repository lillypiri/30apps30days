const React = require("react");
const { mockDOM, unmockDOM, mockAssets, unmockAssets } = require('imitation');
const { test } = require('ava');
const { shallow } = require('enzyme');

var Pocky;

test.beforeEach(t => {
    mockAssets();
    mockDOM();

    Pocky = require('../src/day1').Pocky;
});


test.afterEach.always(t => {
    unmockDOM();
    unmockAssets();
});


test("it renders without failing", t => {
    let component = shallow(<Pocky />);
    t.true(component.html().includes('collectItems'));
});
