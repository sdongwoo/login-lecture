// 콜백함수 복사 
//이크마 스크립트 문법?
const hello =  (req, res) => { 
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

// 두 객체를 넘겨줌
module.exports = {
    hello,
    login,
};
