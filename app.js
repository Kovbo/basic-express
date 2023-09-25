const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Sorry, page not found :(</h1>");
// });

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("About page!");
// });

app.listen(8000);
