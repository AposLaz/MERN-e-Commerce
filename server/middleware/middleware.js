const cors = require('cors')
const express = require('express');

const middlewareExpress = async (app) =>{

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

}

module.exports = middlewareExpress