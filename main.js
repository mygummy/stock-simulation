const express = require('express')
const app = express()
const port = 3000

// let counter = 0;

// app.get('/counter', (req, res) => {
//     counter++;
//     res.send(counter.toString())
// })

// app.use(express.json()) // for parsing application/json

// let chats = [];

// app.get('/chats', (req, res) => {
//     res.send(chats);
// })

// app.post('/chats', (req, res) => {
//     chats.push(req.body.chat);
//     res.send(200);
// })

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})