let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') process.exit();

  for (const binding in bindings) {
    if (key === binding) {
      connection.write(bindings[binding]);
    }
  }
};

const bindings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

module.exports = { setupInput };