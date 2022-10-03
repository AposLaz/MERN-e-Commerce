const express = require('express')
const middlewareExpress = require('./middleware/middleware')
const {PORT} = require('./config/environment')
const data = require('./assets/data/data')

const Server = async ()=>{
    
    const app = express();

    await middlewareExpress(app)

    app.get('/api/products', (req,res)=>{
        res.send(data.products)
    })

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`)
    }).on('error', (err)=>{
        console.log(err)
        process.exit()
    })

}

Server();