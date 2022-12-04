const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000

const {sequelize} = require('./models')

app.get('/', async (req, res) => {
    const [data] = await sequelize.query("select * from notes")

    res.send(data)
})

app.listen(port, ()=> console.log('Listen ' + port))