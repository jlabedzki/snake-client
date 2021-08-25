const IP = 'localhost';
const PORT = 50541;

const bindings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const messages = {
  w: 'Say: no touch!!',
  a: 'Say: sneklol',
  s: 'Say: nom nom',
  d: 'Say: slitherin'
};

module.exports = { IP, PORT, bindings, messages };
