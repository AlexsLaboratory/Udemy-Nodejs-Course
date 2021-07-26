const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>My First Nodejs Site</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Hello from my Nodejs Server!</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000)