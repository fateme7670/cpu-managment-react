const { default: mongoose } = require("mongoose");
const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const socketIoConnection = require("./utils/socketConnection");
const socketHandler = require("./socket.io/index");

//* Start app
const startServer = () => {
  const httpServer = http.createServer(app);
  const io = socketIoConnection(httpServer);
  socketHandler(io);
  httpServer.listen(4001, () => {
    console.log(`Server running on port 4001`);
  });
};

startServer();
