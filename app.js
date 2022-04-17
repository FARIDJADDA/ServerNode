const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });

  res.end(`"got a response"`);
});

server.listen(8080);
