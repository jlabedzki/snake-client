const { clear } = require('console');
const { stdin } = require('process');
const { connect } = require('./client');
const { bindings, messages } = require('./constants');

let connection;
let interval;
let currentKey;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", key => handleUserInput(key));
  return stdin;
};

const handleUserInput = key => {
  if (key === '\u0003') process.exit();

  if (key === 'w' && currentKey !== key && currentKey !== 's') {
    connection.write(messages[key]);

    if (interval && currentKey) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      connection.write(bindings[key]);
    }, 50);

    currentKey = 'w';
  }

  if (key === 's' && currentKey !== key && currentKey !== 'w') {
    connection.write(messages[key]);

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      connection.write(bindings[key]);
    }, 50);

    currentKey = 's';
  }

  if (key === 'a' && currentKey !== key && currentKey !== 'd') {
    connection.write(messages[key]);

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      connection.write(bindings[key]);
    }, 50);

    currentKey = 'a';
  }

  if (key === 'd' && currentKey !== key && currentKey !== 'a') {
    connection.write(messages[key]);

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      connection.write(bindings[key]);
    }, 50);

    currentKey = 'd';
  }

};

module.exports = { setupInput };