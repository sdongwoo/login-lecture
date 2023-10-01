// const http = require('http');
// const app = http.createServer((req, res) =>{
//   res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//   if (req.url === "/") {
//     res.end("여기는 루트입니다.");
//   } else if (req.url === "/login"){
//     res.end("여기는 로그인 화면입니다.");
//   }
// });

// app.listen(3001, () => {
//     console.log("http 로 가동된 서버입니다.");
// });
//===========================================================
"use strict";
// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");
//use는 미들웨어를 등록해주는 메서드

//앱세팅
app.set("views", "./src/views");
// ejs는 많이 사용하는 엔진
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", home);  //use -> 미들웨어를 등록해 주는 메서드. 

module.exports = app;



