const { f } = require("./index");

const serverD = {
  completed: false,
  id: 1,
  title: "delectus aut autem",
  userId: 1,
};

describe.skip("Real Backend", () => {
  test("fetch data", async () => {
    expect(await f()).toMatchObject(serverD);
  });
});

const mockD = { name: "Carlton", age: "too old" };
describe("Mock Backend", () => {
  test("fetch data", async () => {
    expect(await f()).toMatchObject(mockD);
  });
});

module.exports = { mockD };
