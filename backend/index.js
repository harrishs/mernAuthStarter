require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const authRoutes = require("./routes/auth");

app.use("/auth", authRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => app.listen(port))
	.catch((err) => console.log(err));
