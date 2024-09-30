const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ 
    extended: true, 
    limit: "50mb",
}));
app.use(express.json());


const database = require('./src/database/connectDB')
database.connectDB();

app.listen(port, ()=>console.log(`Example app listening at htttp://localhost:${port}`))