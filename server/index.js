const http = require("http"),
  express = require("express"),
  app = express(),
  socketIo = require("socket.io");
const fs = require("fs");

const server = http.Server(app).listen(8080);
const io = socketIo(server);

app.use(express.static(__dirname + "/../client/"));
app.use(express.static(__dirname + "/../node_modules/"));

app.get("/", (req, res) => {
  // res.sendFile("index.html", { root: __dirname + "/../client" });
  const stream = fs.createReadStream(__dirname + "/../client/index.html");
  stream.pipe(res);
});

io.on("connection", function(socket) {});
