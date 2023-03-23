const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('../routes/index')

app.use(cors())
app.use(express.json());

app.use("/v1/api/",routes)


app.listen(5000,function(){
    console.log("this is posd")
})