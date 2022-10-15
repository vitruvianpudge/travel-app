require('dotenv').config()
// IMPORTS
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// MIDDLEWARE
app.use(express.json()) //is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(cors())
app.use(express.urlencoded({ extended: true })) //is a method inbuilt in express to recognize the incoming Request Object as strings or arrays

// DATABASE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (!error) {
        console.log('DB+');
    } else {
        console.log(error);
    }
})

const tiketSchema = new mongoose.Schema({
    to: String,
    from: String,
    transport: String,
    date: String
})

const Tiket = mongoose.model("Tiket", tiketSchema)

// ROUTES
app.get("/", (req, res) => {
    Tiket.find({})
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});


app.listen(3001, () => {
    console.log('Server+');
})