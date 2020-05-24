const knex = require('../db/connection')

const getUser = async (req, res) => {
  const userId = req.headers.userAuth
  const user = await knex('users')
    .where('id', userId)
    .select('*')
  return res.json({ user })
}

const createUser = async (req, res) => {
  const userId = req.headers.auth
  const { userName, userEmail } = req.body

  const [id] = await knex('users')
    .insert({
      id: userId,
      name: userName,
      email: userEmail
    })
  return res.json(id)
}

module.exports = { createUser, getUser }