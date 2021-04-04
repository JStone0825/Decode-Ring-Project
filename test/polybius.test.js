// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should encode the input when encode = true", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.equal(expected);
    })
    it("should decode the input when encode = false", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
    });
    it("should return false if input to decode is not even", () => {
        const actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it("should decode multiple words", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.equal(expected);
    });

})