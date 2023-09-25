const http = require("http");
const { readFileSync } = require("fs");

const homeHtml = readFileSync("./public/index.html");
const aboutHtml = readFileSync("./public/about.html");
const logo = readFileSync("./public/logo.png");
const style = readFileSync("./public/style.css");

const server = http.createServer((req, res) => {
  get("/", () => {
    headers(200, "text/html");
    res.end(homeHtml);
  });

  get("/about", () => {
    headers(200, "text/html");
    res.end(aboutHtml);
  });

  get("/logo.png", () => {
    headers(200, "image/png");
    res.end(logo);
  });

  get("/style.css", () => {
    headers(200, "text/css");
    res.end(style);
  });

  function headers(code, type) {
    res.writeHead(code, { "content-type": type });
  }
  function get(url, callback) {
    if (req.url === url) {
      callback();
    }
  }
});

server.listen(8000);

// if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homeHtml);
//     res.end();
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(aboutHtml);
//   } else if (req.url === "/logo.png") {
//     res.writeHead(200, { "content-type": "image/png" });
//     res.end(logo);
//   } else if (req.url === "/style.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.end(style);
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not found!");
//   }
