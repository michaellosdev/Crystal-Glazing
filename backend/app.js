const express = require('express')
const app = express()

const PORT =  process.env.PORT || 5000

//Middleware

app.use(express.static('../frontend'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../frontend/idex.html', )
})

app.listen(PORT, ()=> {
    console.log(`Server running om port ${PORT}`)
})
