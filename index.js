const express = require("express");
require('dotenv').config();
const cors = require("cors");
const Router = require("./routes/route.js");
const Connection = require("./config/db.js");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/",Router);
Connection();
app.listen(process.env.PORT, () =>
    console.log(`Server is running successfully on PORT ${process.env.PORT}`)
); 
