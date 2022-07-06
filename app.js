const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const userRoute = require("./admin/auth.router");

const view = __dirname + "/views/";
app.use(express.static(__dirname + "/assets/chapter4/"));
app.use(express.static(path.join(__dirname, "assets/chapter3/")));

app.get("/game", (req, res) => {
    res.sendFile(path.join(view + "chapter4/index.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(view + "chapter3/index.html"));
});

app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log("berhasil");
});