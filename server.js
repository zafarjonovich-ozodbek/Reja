console.log("Web serverni boshlash");
const express = require("express");
const app = express();

// 1: kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const http = require("http");

// 2: session code

// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.get("/", function(req, res) {
    res.end("hello world");
});
app.get("/hello", function(req, res) {
    res.end("hello world");
});
app.get("/gift", function(req, res) {
    res.end("hello world");
});
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfullt on port: ${PORT}`);
});