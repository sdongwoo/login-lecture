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
const app = express();



// 라우팅
const home = require("./routes/home");
//use는 미들웨어를 등록해주는 메서드


//앱세팅
app.set("views", "./views");
// ejs는 많이 사용하는 엔진
app.set("view engine", "ejs");
app.use("/", home);

module.exports = app;



