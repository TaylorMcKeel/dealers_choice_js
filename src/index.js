const {Pokemon, Trainor}= require('../db')
const Sequelize = require('sequelize')
const { builtinModules } = require('module')
const div = document.querySelector('#main')

console.log(window.location.hash)
const curr = window.location.hash.slice(1) *1

const renderHome = ()=>{
    const html = `
        <a href='/pokemon'>See all Pokemon!</a>
        <a href='/trainors'>See all Trainors!</a>
    `
    div.innerHTML = html
}

const renderPokemon =async()=>{
    const pokemon = await Pokemon.findAll()
    const trainors = await Trainor.findAll()
    const html=`
        ${pokemon.map(card=>{
            const train = trainors.filter((item)=>{item.id === card.trainorId})
            return `<li class='mainCard'>
            <a href='/pokemon/#${card.id}'><h3>${card.name}</h3></a>
                ${curr === card.id ? `
                    <ul>
                        <li>Health: ${card.health}</li>
                        <li>Type: ${card.type}</li>
                        <li>Trainor: <a href='/trainors/#${train.id}'>${train.name}</a></li>
                    </ul>
                ` :''}
            </li>`
         }).join('')}
    `
    div.innerHTML = html
}

const renderTrainors =async()=>{
    const pokemon = await Pokemon.findAll()
    const trainors = await Trainor.findAll()
    const html=`
        ${trainors.map(card=>{
            const poke = pokemon.filter((item)=>{card.id === item.trainorId})
            const friend = trainors.filter((item)=>{card.id === item.friendId})
            return `<li class='mainCard'>
            <a href='/trainors/#${card.id}'><h3>${card.name}</h3></a>
                ${curr === card.id ? `
                    <ul>
                        <li>Hometown: ${card.hometown}</li>
                        <li>Best Friend: ${friend.name}</li>
                        <li>Pokemon: ${poke.map(item=>{
                            return `
                            <a href='/pokemon/#${item.id}'>${item.name}</a>
                            `
                        })}</li>
                    </ul>
                ` :''}
            </li>`
         }).join('')}
    `
    div.innerHTML = html
}

const render=()=>{
    if (path){
        renderTrainors()
    }
}

module.exports={
    div, renderPokemon, renderTrainors, renderHome
}