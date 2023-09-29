"use strict";
// 콜백함수 복사 
//이크마 스크립트 문법?
const output = {
    home:  (req, res) => { 
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woormIT", "qwer", "asdf"],
    psword: ["1234", "12345", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,    
           psword = req.body.psword;
        
        if (users.id.includes(id))  {
            const idx = users.id.incdexOf(id);
            if (users.psword[idx]=== psword) {
                return res.json({
                    success: true, 
                });
            }
        }
        return res.json({
            success : false,
            mag:"로그인에 실패하셨습니다.",
        })  
    }


};

// 두 객체를 넘겨줌
module.exports = {
    output,
    process,
};
