const { initConnection } = require("./namespaces.socket");

module.exports = socketHandler = (io) => {
  initConnection(io);
};
