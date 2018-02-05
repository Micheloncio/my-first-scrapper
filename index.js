const express = require('express')
const fs = require('fs')
const request = require('request')
const cherio = require ('cherio')

const app = express()

app.get('/scraper',function(req, res){

})

app.listen('8080')

console.log('Magic on port 8080')

exports= module.exports = app