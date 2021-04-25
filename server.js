'use strict';

const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();
const cors  = require('cors');
require('dotenv').config();
app.use(cors());

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port ");
});

const peerServer = ExpressPeerServer(listener, {
  debug: true,
  path: '/myapp'
});

app.use('https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js', peerServer);