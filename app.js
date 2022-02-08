require("dotenv").config();
require("express-async-errors");

const express = require('express'); 
const app = express(); 

const prijava = require("./controllers/prijava");
const sendImage = require("./controllers/gallery");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");


/* middleware */
app.use(express.json());
app.use(express.static("public"));

app.post("/prijava", prijava);
app.get("/gallery/:name", sendImage);


app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Aplikacija pokrenuta na portu ${port}...`));