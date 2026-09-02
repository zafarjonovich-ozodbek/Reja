console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data);
//     }
// });

// MongoDB chaqirish
const db = require("./server").db();

// 1: kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);   
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
       console.log(data.ops);
       res.json(data.ops[0]);
    })
    // res.json({ test: "success"})     
})

// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// });

app.get('/', function (req, res) {
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong")
        } else {
            
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;