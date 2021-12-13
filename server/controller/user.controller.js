const db = require('../db')

class UserController {
    async createUser(req, res) {
        const { id, shared, email } = req.body
        const newPerson = await db.query(`INSERT INTO person (id, shared, email) values ($1, $2, $3) RETURNING *`, [id, shared, email])

        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = 
    }
    
    async getOneUser(req, res) {

    }
    
    async updateUser(req, res) {

    }
    
    async deleteUser(req, res) {

    }
}

module.exports = new UserController()