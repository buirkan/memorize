const express = require('express')
const userController = require('./controller/userController')
const rankingController = require('./controller/rankingController')
const sessionController = require('./controller/sessionController')
const router = express.Router()

router.post('/login', sessionController.logon)
router.get('/user', userController.getUser)
router.post('/createUser', userController.createUser)
router.post('/newRank', rankingController.createEntry)
router.get('/ranking', rankingController.getRanking)

module.exports = router
