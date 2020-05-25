const knex = require('../db/connection')

const getRanking = async (req, res) => {
  const ranking = await knex('ranking')
    .select('*')
  return res.json({ ranking })
}

const createEntry = async (req, res) => {
  const { time } = req.body
  const { userId } = req.headers.auth

  const [id] = await knex('ranking')
    .insert({
      gameTime: time,
      user_id: userId
    })
  return res.json({ id })
}

module.exports = { createEntry, getRanking }