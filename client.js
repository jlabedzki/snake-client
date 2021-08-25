const net = require("net");
const { IP, PORT } = require('./constants');

let interval;

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.on("connect", () => {
    console.log('Connected!');
    conn.write('Name: JL');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect };