const lib = require("../lib/prod");

test("Get color from object", () => {
  expect(lib.german.fusionRed).toBe("rgb(252, 92, 101)");
});

test("Get color from list", () => {
  const [fusionRed] = lib.german.list;
  expect(fusionRed.color).toBe("rgb(252, 92, 101)");
});
