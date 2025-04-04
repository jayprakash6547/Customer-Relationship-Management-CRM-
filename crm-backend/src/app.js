const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
const leadRoutes = require("./routes/leads");

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

module.exports = app;
