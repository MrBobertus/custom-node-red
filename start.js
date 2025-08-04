const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: '/',
  httpNodeRoot: '/api',
  userDir: './',
  functionGlobalContext: {},
  flowFile: 'flows.json',
  uiPort: process.env.PORT || 1880,
  credentialSecret: process.env.CREDENTIAL_SECRET || 'my-node-red-secret',
  adminAuth: {
    type: "credentials",
    users: [{
      username: process.env.NODE_RED_USERNAME,
      password: process.env.NODE_RED_PASSWORD_HASH,
      permissions: "*"
    }]
  }
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.uiPort, () => {
  console.log(`Node-RED is running on port ${settings.uiPort}`);
});

RED.start();
