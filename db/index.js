const pg = require('pg')
const pgUrl= 'postgres://localhost/pokemon'
const client = new pg.Client(pgUrl)

client.connect()

module.exports = client