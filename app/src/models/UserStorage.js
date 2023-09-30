"use strict"

class UserStorage{
    static #users = {
        id: ["qwer", "wert", "asdf"],
        psword: ["1234", "2345", "3456"],
        name: ["나개발", "김팀장", "박대리"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
          if(users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
          }
          return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;