const knex = require('../db/connection')
const crypto = require('crypto')

const getUser = async (req, res) => {
  const { userId } = req.params
  const user = await knex('users')
    .where('id', userId)
    .select('*')
  return res.json({ user })
}

const getUsers = async (req, res) => {
  const users = await knex('users')
    .select('*')
  return res.json({ users })
}

const createUser = async (req, res) => {
  const userId = crypto.randomBytes(4).toString('HEX')
  const { userName, userEmail } = req.body
  console.log(`username received: ${userName}`)
  console.log(`user email received: ${userEmail}`)

  const [id] = await knex('users')
    .insert({
      id: userId,
      name: userName,
      email: userEmail
    })
  return res.json(id)
}

module.exports = { createUser, getUser, getUsers }