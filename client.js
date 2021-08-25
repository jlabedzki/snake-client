const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on("connect", () => {
    console.log('Connected!');
    conn.write('Name: JBL');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 100);

  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

};

module.exports = { connect };