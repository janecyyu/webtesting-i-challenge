module.exports = {
  succeed,
  fail,
  repair,
  get,
};

let item = {
  name: "Tom",
  durability: 50,
  enhancement: 15,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
