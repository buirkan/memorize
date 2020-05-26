const express = require('express')
const cors = require('cors')
const serverRoutes = require('./routes')
const logStyles = require('./util/logStyles')

const app = express()

app.use(cors)
app.use(express.json())
app.use(serverRoutes)

function serverListen(port) {
  app.portNumber = port
  app.listen(port, () => {
    console.log(logStyles.CHECK_MARK.p, logStyles.CHECK_MARK.uc, `Server is running on port ${app.portNumber} :)`)
  }).on('error', function (err) {
    if (err.errno === 'EADDRINUSE') {
      console.log(logStyles.ERROR_MARK.p,
        logStyles.ERROR_MARK.uc,
        `Port ${app.portNumber} is busy, trying again on ${app.portNumber + 1}...`)
      listen(app.portNumber + 1)
    } else {
      console.log(elogStyles.ERROR_MARK.p, logStyles.ERROR_MARK.uc, err.message)
    }
  })
}

serverListen(4444)