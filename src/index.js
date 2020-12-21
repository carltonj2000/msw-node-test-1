const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/1";
const f = () => fetch(url).then((response) => response.json());

module.exports = {
  url,
  f,
};
