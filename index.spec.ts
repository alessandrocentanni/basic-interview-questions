import { countCharacters, largestNumber, solve200 } from ".";

describe("countCharacters", () => {
  it("should return the number of times each character appears in the string", () => {
    expect(countCharacters("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });
});

describe("largestNumber", () => {
  it("should return the largest number", () => {
    expect(largestNumber([50, 2, 1, 9])).toBe(95021);
  });
});

describe("solve200", () => {
  it("should return the smallest number of moves", () => {
    expect(solve200()).toBe(9);
  });
});
