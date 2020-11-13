const pg = require('pg')
const express = require('express')
const {sync, Pokemon} = require('./db')
const cardList = require("./views/cardList");
const card = require("./views/card");
const app = express()


app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }));


app.get('/', async (req, res, next)=>{
    try{
        const data = await Pokemon.findAll()
        res.send(cardList(data))
    }catch{
        next()
    }
})

app.get('/pokemon/:id', async (req, res, next)=>{
    try{
        const data = await Pokemon.findByPk(req.params.id)
        console.log(data.name)
        res.send(card(data))
    }
    catch{
        next()
    }
})




const init=async()=>{
    await sync()
    const PORT = 3000
    app.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`)
    })

}

init()