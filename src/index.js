const express=require('express');

const accountRouter=require("./routes/accountRouter.js")

const dotenv = require("dotenv").config();
const { BBDD } = require("./bbdd");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(accountRouter);

app.use("/login",accountRouter);

app.listen(PORT, () => console.log(`Server in port ${PORT}`));

