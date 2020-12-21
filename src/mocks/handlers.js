const { rest } = require("msw");
const { url } = require("../index");
const { mockD } = require("../index.test");

const handlers = [
  rest.get(url, (req, res, ctx) => res(ctx.status(200), ctx.json(mockD))),
];

module.exports = {
  handlers,
};
