import { countCharacters, largestNumber, solveDeduction } from ".";

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

describe("solveDeduction", () => {
  it("should return the smallest number of moves", () => {
    expect(solveDeduction(500, 1)).toBe(13);
  });
});
