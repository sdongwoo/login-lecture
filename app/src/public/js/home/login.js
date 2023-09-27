"use strict"


// Dom은 Document Object Model(문서객체모델)
// 데이터를 가져와서 제어할 수 있게됨

const id = document.querySelector("#id"),
   // #은 테그의 id로 부여된 id를 가져와 달라는 뜻
  psword =  document.querySelector("psword"), 
  loginBtn = document.querySelector("button");
loginBtn.addEventListener("click", login);
//querySelector  = 질의 선택자 
    // html에 있는 teg들에 대한 정보들을 가져옴
    // teg를 개발자 임의로 선택자로 만들 수 있음 
    // 선택자를 이용해서 js를 제어함

function login() {
    console.log(id.value);
}