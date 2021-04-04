// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should encode when encode = true", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.equal(expected);
    });
    it("should decode when encode = false", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.equal(expected);
    });
    it("should return false if all characters of alphabet are not unique", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it("should return false if alternate alphabet is not exactly 26 characters", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
})
