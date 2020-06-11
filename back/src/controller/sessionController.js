const knex = require('../db/connection')

const logon = async (req, res) => {
  const { emailUser } = req.body
  console.log(`user e-mail received: ${emailUser}`)

  const user = await knex('users')
    .where('email', emailUser)
    .select('*')
    .first()

  if (!user)
    return res.status(400).json({ error: `No user found with email ${emailUser}` })

  return res.json({ user })
}

module.exports = { logon }