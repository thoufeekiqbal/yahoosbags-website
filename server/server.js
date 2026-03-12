const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/yahoosbags")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
    res.send("Yahoos Bags API Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});

app.post("/contact",(req,res)=>{

const data=req.body

console.log(data)

res.send("Received")

})