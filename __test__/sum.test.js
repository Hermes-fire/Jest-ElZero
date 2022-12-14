const sum = require("../sum");

// test(name, func, timeout)
// it(name, func, timeout)

describe("Check The numbers Sum Total", () => {
  test("Return The Number", () => {
    expect(sum()).toBe(0);
  });

  test("Return The Number", () => {
    expect(sum(10)).toBe(10);
  });

  test("Return num1 + num2", () => {
    expect(sum(15, 25)).toBe(40);
  });

  test("Return num1 + num2", () => {
    expect(sum(15, 25, 10)).toBe(50);
  });

  test("Return num1 + num2", () => {
    expect(sum(15, 25, 10, 5)).toBe(55);
  });
});
