const express = require('express')
const client = require('./db')
const cardList = require("./views/cardList");
const card = require("./views/card");
const app = express()


app.use(express.static(__dirname + '/public'))

app.get('/', async (req, res, next)=>{
    try{
        const data = await client.query('SELECT * FROM pokemon')
        const posts = data.rows
        res.send(cardList(posts))
    }catch{
        next()
    }
})

app.get('/pokemon/:id', async (req, res, next)=>{
    try{
        const data = await client.query(`SELECT * FROM pokemon WHERE id=${req.params.id}`)
        const post = data.rows
        res.send(card(post))
    }
    catch{
        next()
    }
})


const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})