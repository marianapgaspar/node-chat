const express = require("express");
const app = express();
const route = require("./routes/web");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Conectado ao mongoDB"));
mongoose.connection.on("error", err => console.log("Erro de conexão: ",err.message));

const HTML_DIR = path.join(__dirname, '/pages/')
app.use(express.static(HTML_DIR))
app.use(bodyParser.json());
app.use("/", route)

app.listen(process.env.PORT) 