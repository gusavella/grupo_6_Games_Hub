const db = require('../database/models')

module.exports =  {
    all: async (req, res) => {
        let response = {
            count: 0,
            users: []
        }
        let users = await db.User.findAll({include:["role"]})
        response.count = users.length
        response.users = users.map(user => {
            let userDetail = {
                id: user.id,
                name: user.names,
                email: user.email,
                detail: `/api/users/${user.id}`,
                role:user.role.name
            }
            return userDetail
        })
        return res.json(response)
    },
    detail: async (req, res) => {
        let user = await db.User.findByPk(req.params.id)
        let response = {
            id: user.id,
            name: user.names,
            surname: user.surnames,
            email: user.email,
            address: user.address,
            phone: user.phone,
            image: `http://localhost:3030${user.image}`
        }
        return res.json(response)
    }
}