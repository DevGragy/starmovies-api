const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", require("./routes"));

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Listen on port " + server.address().port);
});