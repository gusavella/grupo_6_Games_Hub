const fs = require("fs");
const path = require("path");
const User={
    fileName:  path.join(__dirname, "../database/users.json"),
    getData :   function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'))

    },
    findAll :   function(){
                return this.getData()
    },
    findByPk: function(id){
                let allUsers = this.findAll()
                let UserFound = allUsers.find(user=> user.id ==id)
                return UserFound
    }
    ,
    findByField: function(field,text){
        let allUsers = this.findAll()
        let UserFound = allUsers.find(user=> user[field] ==text)
        return UserFound
    },
    generateId: function(){
        let allUsers = this.findAll()
        let lastUser = allUsers.pop()
        if (lastUser){
            return lastUser.id +1
        }
            return 1
    },
    create: function(userData){
        let allUsers = this.findAll()
        userData.id=this.generateId()
        allUsers.push(userData)
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null,' '))
        return true
    },
    delete: function(id){
        let allUsers = this.findAll()
        let finalUsers= allUsers.filter(user =>user.id != id)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null,' '))
        return true
    }
}

 module.exports = User