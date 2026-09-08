// BACKEND server

console.log("Web serverni boshlash");
const express = require("express");      // NodeJS ni "EXPRESS" framework orqalo BACKENDni quryapmiz
const res = require("express/lib/response");
const app = express();                   // express (function) --> app (object)
const http = require("http");
const fs = require("fs");


// MongoDB chaqirish
const db = require("./server")
const mongodb = require("mongodb");

// BACKEND ni ishka tushirish(4ta "Step" bor):
// 1: kirish code
app.use(express.static("public"));              // Design(Middleware pattern) > "public folder"ni tashqa olamga ochiqlayapti
app.use(express.json());                        // Design(Middleware pattern) > rest api uchun xizmat (FRONTENDdan BACKENDga kirib kelishi uchun)
app.use(express.urlencoded({extended: true}));  // Design(Middleware pattern) > traditional api uchun xizmat

// 2: session code

// 3: views code

// BACKENDda FRONTENDni nima orqali qurayotkanimzni bildiryapmiz
app.set("views", "views");                       // backendda forntentni qurish
app.set("view engine", "ejs");                   // backendda forntentni qurish

// 4: routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");

    // STEP2: FRONTENDdan BACKENDga kirib keldi
    console.log(req.body);   
    const new_reja = req.body.reja;

    // STEP4: BACKEDNdan DATABASEga jo'nab ketdi;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        // STEP4: DATABASEdan BACKENDga kirib keldi;
        // STEP5: BACKENDdan FRONTENDga jo'nab ketdi;
        console.log(data.ops);
       res.json(data.ops[0]);                     // rest api
    })   
})

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)}, 
        function(err, data) {
          res.json({state: "success"});         // rest api
        }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate ({       // DATABASEdan malumotni o'zgartirish uchun
        _id: new mongodb.ObjectId(data.id)}, 
        {$set: {reja: data.new_input}}, function(err,  data) {
        res.json({ state: "success"})
       })
})

app.post("/clean-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar o'chirildi" });
        })
    }
})

app.get('/', function (req, res) {
    // console.log("STEP 2: FRONTENDdan BACKENDga kirib keldi");

    // console.log("STEP 3: BACKENDdan DATABASEga jo'nab ketdi")
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong")
        } else {        
        // console.log("STEP 4: DATABASEdan BACKENDga keldi")
        // console.log("STEP 5: BACKENDdan FRONTENDga jo'nab ketdi")
            res.render("reja", {items: data});        // tradition api
        }
    });
});

module.exports = app;