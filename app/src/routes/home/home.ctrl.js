"use strict";
// 콜백함수 복사 
//이크마 스크립트 문법?
const User = require("../../models/User");


const output = {
    home:  (req, res) => { 
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};


const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};
       
    //     const id = req.body.id,    
    //        psword = req.body.psword;
        
    //     const users = UserStorage.getUsers("id", "psword");
    //     //const user = new User(req.body);
    //     //const response = user.login();
    //     //return res.json(response);

    //     const response = {};
    //     if (users.id.includes(id))  {
    //         const idx = users.id.indexOf(id);
    //         if (users.psword[idx]=== psword) {
    //             response.success = true; 
    //             return res.json(response); 
                    
                
    //         }
    //     }
        
    //     response.success = false;
    //     response.mag = "로그인에 실패하셨습니다.";
    //     return res.json(response);  
    // },



// 두 객체를 넘겨줌
module.exports = {
    output,
    process,
};
