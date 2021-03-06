const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http').Server(app);

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

http.listen(port, () => {
  console.log('App listen in http://localhost:'+3000);
})