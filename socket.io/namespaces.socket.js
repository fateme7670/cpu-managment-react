const { updateCpuUsageHistory } = require("./../utils/cpu");
const os = require("os-utils");

exports.initConnection = (io) => {
  io.on("connection", async (socket) => {
    const cpuUsageHistory = [];
    const cpuUsageMaxLength = 10;
    const interval = 1000;

    for (let i = 0; i < cpuUsageMaxLength; i++) {
      cpuUsageHistory[i] = [i, 0];
    }

    setInterval(() => {
      os.cpuUsage((usage) => {
        updateCpuUsageHistory(
          Math.round(usage * 100),
          cpuUsageMaxLength,
          cpuUsageHistory
        );

        socket.emit("cpu", cpuUsageHistory);
      });
    }, interval);
  });
};
