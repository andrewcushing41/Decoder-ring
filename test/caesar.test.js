const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift value is equal to 0",() => {
        let actual = caesar("tester", 0);
        expect(actual).to.be.false;
    })
})

describe("caesar", () => {
    it("should return false if the shift value is less than -25",() => {
        let actual = caesar("tester", -26);
        expect(actual).to.be.false;
    })
})

describe("caesar", () => {
    it("should return false if the shift value is greater than 25",() => {
        let actual = caesar("tester", 26);
        expect(actual).to.be.false;
    })
})
describe("caesar", () => {
    it("should encode a message by shifting the letters",() => {
        let expected = "b";
        let actual = caesar("a", 1);
        expect(actual).to.eql(expected);
    })
    it("should wrap around the alphabet",() => {
        let expected = "c";
        let actual = caesar("z", 3);
        expect(actual).to.eql(expected);
    })
    it("should ignore capital letters",() => {
        let expected = "c";
        let actual = caesar("Z", 3);
        expect(actual).to.eql(expected);
    })
    it("allow for a negative shift that will shift to the left",() => {
        let expected = "a";
        let actual = caesar("d", -3);
        expect(actual).to.eql(expected);
    })
    it("decoding a message should leaves spaces and other symbols as is",() => {
        let expected = "b b";
        let actual = caesar("a a", 1);
        expect(actual).to.eql(expected);
    })
    it("when decode is false ",() => {
        let expected = "bb";
        let actual = caesar("aa", 1);
        expect(actual).to.eql(expected); 
        expect( caesar(actual, 1, false)).to.eql("aa")
    })
    
 
})