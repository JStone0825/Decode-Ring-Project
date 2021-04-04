// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    //All return false tests
    it("should return 'false' if shift is nonexistant", () => {
        const actual = caesar("thinkful");
        expect(actual).to.be.false;
    });
    it("should return 'false' if shift is equal to 0", () => {
        const actual = caesar("thinkful", 0);
        expect(actual).to.be.false;
    });
    it("should return 'false' if shift is less than -25", () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    });
    it("should return 'false' if shift is more than 25", () => {
        const actual = caesar("thinkful", 26);
        expect(actual).to.be.false;
    });
//end return false tests
    it("should encode a message when encode = true", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
     });
     it("should maintain spaces and return everything lowercase", () => {
         const actual = caesar("THINKFUL thinkful", 3);
         const expected = "wklqnixo wklqnixo";
         expect(actual).to.equal(expected);
     });
     it("should decode a message when encode = false", () => {
         const actual = caesar("wklqnixo", 3, false);
         const expected = "thinkful";
         expect(actual).to.equal(expected);
     });
     it("should wrap a letter that is shifted off the alphabet back around", () => {
         const actual = caesar("This is a secret message", 8);
         const expected = "bpqa qa i amkzmb umaaiom";
         expect(actual).to.equal(expected);
     });
     it("should maintain non-alphabetic symbols", () => {
         const actual = caesar("Hello!", 1);
         const expected = "ifmmp!";
         expect(actual).to.equal(expected);
     });
});