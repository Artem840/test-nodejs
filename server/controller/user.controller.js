const { where } = require('sequelize/dist')
const User = require('../models/user.model')

class UserController {
    async createUser(req, res) {
        const { id, shared, email } = req.body
        let user = await User.findOne({where: id})
        if (user !== null) {
            if (email !== null) {
                user = await user.update({email}, {where: {id}, returning: true})
            }
            if (shared) {
                user = await user.update({shared}, {where: {id}, returning: true})
            }
            res.json(user)
        } else {
            user = await User.create()
            res.json(user)
        }
    }
}

module.exports = new UserController()