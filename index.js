// IMPORTS
const express = require("express");
// CONSTANTS
const app = express();
const port = 8080;
// LANGUAGES
app.get("/languages/python3", (req, res) => {
  res.send(
    "https://img.shields.io/badge/-Python_3-blue?logo=python&logoColor=yellow"
  );
});
app.get("/languages/javascript", (req, res) => {
  res.send("https://img.shields.io/badge/-JavaScript-black?logo=javascript");
});
app.get("/languages/java", (req, res) => {
  res.send("https://img.shields.io/badge/-Java-964B00?logo=java");
});
app.get("/languages/c", (req, res) => {
  res.send("https://img.shields.io/badge/-C-gray?logo=c");
});
app.get("/languages/cpp", (req, res) => {
  res.send(
    "https://img.shields.io/badge/-C++-white?logo=c%2B%2B&logoColor=00599C"
  );
});
app.get("/languages/rust", (req, res) => {
  res.send("https://img.shields.io/badge/-Rust-orange?logo=rust");
});
app.get("/languages/swift", (req, res) => {
  res.send("https://img.shields.io/badge/-Swift-white?logo=swift");
});
app.get("/languages/go", (req, res) => {
  res.send("https://img.shields.io/badge/-Go-00ADD8?logo=go&logoColor=white");
});
// USERS
app.get("/user/", (req, res) => {
  username = encodeURIComponent(req.query.username);
  color = encodeURIComponent(req.query.color);
  usertype = encodeURIComponent(req.query.type);
  res.send(
    `http://img.shields.io/badge/-${username}-${color}?logo=${usertype}&style=for-the-badge`
  );
});
// SERVER
app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}`);
});
