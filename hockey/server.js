const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, ()=> console.log("App running on port", port));

const MongoClient = require("mongodb").MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'hockey';
let db;

MongoClient.connect(url,{useUnifiedTopology:true}, function(err,client){
    if(err) return console.log("MongoDB error",err);
    console.log("Connected successfully to DB");
    db = client.db(dbName);
}) 

app.post("/send", (req, res)=>{
    const nameMessage = req.body;
    db.collection("messages").insertOne(nameMessage);

})

app.get("/send", async (req, res)=>{
    const dbInfo = await db.collection("messages").find({}).toArray();
    if(!dbInfo) return res.json({error: "Error getting messages"});
    res.json(dbInfo);
})

app.delete("/delete", async (req, res)=>{
    const dbInfo = await db.collection("messages").find({}).toArray();
    if(!dbInfo) return res.json({error: "Error getting messages"});
    res.json(dbInfo);
})