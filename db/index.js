const Sequelize = require('sequelize')
const {STRING, INTEGER} = Sequelize

const conn = new Sequelize('postgres://localhost/pokemon')

const Pokemon = conn.define('pokemon',{
    name: STRING,
    health: INTEGER,
    type: STRING,
    owner: STRING
})

const sync=async()=>{
    await conn.sync({ force: true })
    await Pokemon.create({name: 'Squirtle', health: 200,type: 'Water',owner:'Ash'})
    await Pokemon.create({name: 'Charmander', health: 300,type: 'Fire',owner:'Taylor'})
    await Pokemon.create({name: 'Jigglypuff', health: 100,type: 'Normal',owner:'Misty'})
    await Pokemon.create({name: 'Onyx', health: 400,type: 'Rock',owner:'Brock'})
    await Pokemon.create({name: 'Magmar', health: 350,type: 'Fire',owner:'John'})

}
module.exports = {sync, Pokemon}