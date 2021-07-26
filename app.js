const http = require("http");

// Custom Modules
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000)