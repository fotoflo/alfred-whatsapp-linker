const { filter } = require("../source/osascript");

describe(" filter", () => {
  it("should return NAN if not a valid number", () => {
    const result = filter("not a valid number");
    expect(result).toBe("NAN");
  });

  it("should return a link from a valid number", () => {
    const result = filter("1234567890");
    expect(result).toBe("https://api.whatsapp.com/send?phone=+1234567890");
  });

  it("should return a link from a valid number with spaces, dashes and parentheses", () => {
    const result = filter("(123) 456-7890");
    expect(result).toBe("https://api.whatsapp.com/send?phone=+1234567890");
  });

  it("for phone numbers starting with zero, it should return a indonesian country coded number", () => {
    const result = filter("0123456789");
    expect(result).toBe("https://api.whatsapp.com/send?phone=+62123456789");
  });
});
