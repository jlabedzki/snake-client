const IP = 'localhost';
const PORT = 50541;

const bindings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
};

const messages = {
  w: 'no touch!!',
  a: 'sneklol',
  s: 'nom nom',
  d: 'slitherin'
};

module.exports = { IP, PORT, bindings, messages };
