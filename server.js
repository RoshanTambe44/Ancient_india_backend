const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const warrior = require("./routes/warrior.route")
const app = express()
const PORT = 8000 

app.use(cors({ origin: '*' }));

app.use(express.json());



// Connect to MongoDB
mongoose.connect("mongodb+srv://ancientindia628:frCjuNHuBAw9sM06@ancient.uv3ka.mongodb.net/?retryWrites=true&w=majority&appName=Ancient", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
 
app.use("/api", warrior)

app.get("/", (req, res )=>{
    res.send("hello world")
})


app.listen(PORT, ()=> console.log("server listen on " + PORT )
 )