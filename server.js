'use strict';

const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

const listener = app.listen(3000, () => {
  console.log("Your app is listening on port ");
});

const peerServer = ExpressPeerServer(listener, {
  debug: true,
  path: '/myapp'
});

app.use('https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js', peerServer);