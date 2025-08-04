// start.js
const RED = require("node-red");
const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(404);
  res.end();
});

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./",
  functionGlobalContext: {},
  flowFile: "flows.json",
  settingsFile: __dirname + "/settings.js",
  uiPort: process.env.PORT || 1880,
};

RED.init(server, settings);
RED.start();
