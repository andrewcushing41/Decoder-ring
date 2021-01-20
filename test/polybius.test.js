const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("encoding a message should encode a message by translating each letter to number pairs",() => {
        let expected = '11';
        let actual = polybius("a");
        expect(actual).to.eql(expected);
    })
    it("Capital letters can be ignored",() => {
        let expected = '11';
        let actual = polybius("A");
        expect(actual).to.eql(expected);
    })
    it("I is set to equal 42",() => {
        let expected = '42';
        let actual = polybius("i");
        expect(actual).to.eql(expected);
    })
    it("J is set to equal 42",() => {
        let expected = '42';
        let actual = polybius("j");
        expect(actual).to.eql(expected);
    })
  
})