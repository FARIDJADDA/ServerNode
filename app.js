const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  const obj = {
    key1: "value1",
  };
  res.end(JSON.stringify(obj));
});

server.listen(8080);
