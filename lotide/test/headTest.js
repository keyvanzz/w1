const assert = require(`chai`).assert;
const head = require(`../head`);

describe("#head", () => {
  it("should returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("should returns '5' for ['5']", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("should returns '5' for ['5, 6, 7']", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should returns 'Yo Yo' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Yo Yo", "Lighthouse", "Labs"]), "Yo Yo");
  });

  it("should returns '1' for ['1']", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("should returns 'undefined' for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});
