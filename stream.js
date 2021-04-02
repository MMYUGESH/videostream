const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'video/mp4' })
    var stream = fs.createReadStream("lion.mp4");
    stream.pipe(res);
})

app.listen(port, () => console.log("started working"))