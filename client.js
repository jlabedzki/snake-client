const net = require("net");
const { IP, PORT } = require('./constants');

let interval;

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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