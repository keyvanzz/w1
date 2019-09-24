const assert = require(`chai`).assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("should returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });

  it("should returns 2 , 3, 4, 5 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
});
