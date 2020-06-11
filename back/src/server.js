const express = require('express')
const cors = require('cors')
const serverRoutes = require('./routes')
const logStyles = require('./util/logStyles')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(serverRoutes)

app.listen(port, () => {
  console.log(logStyles.CHECK_MARK.p, logStyles.CHECK_MARK.uc, `Server is running on port ${port}`)
})