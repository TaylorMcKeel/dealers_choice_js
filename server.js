const pg = require('pg')
const express = require('express')
const path = require('path')
const {sync} = require('./db')
const {renderPokemon, renderTrainors, renderHome}= require('./src')
const app = express()



app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({ extended: false }));


app.get('/', async (req, res, next)=>{
    try{
        renderHome()
        res.sendFile(path.join(__dirname + 'index.html'))
    }catch{
        next()
    }
})

app.get('/pokemon/:id', async (req, res, next)=>{
    try{
        renderPokemon()
        res.sendFile(path.join(__dirname + 'index.html'))
    }
    catch{
        next()
    }
})

app.get('/trainors/:id', async (req, res, next)=>{
    try{
        renderTrainors()
        res.sendFile(path.join(__dirname + 'index.html'))
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

