const express = require('express')
const app = express ()

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello Node API')
})



app.listen(3000, ()=> {
    console.log("Node is running in port 3000")
})