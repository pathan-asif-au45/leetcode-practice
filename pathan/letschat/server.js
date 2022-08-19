var express = require('express')
var app = express()
var http = require("http").Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 5000
// const Msg = require("./models/messages")

var mongoose = require("mongoose")
var mongodb = "mongodb+srv://asif_22:asif22420@cluster0.uim3kpn.mongodb.net/chatapp?retryWrites=true&w=majority"
mongoose.connect(mongodb, { useNewUrlParser: true }).then(() => {
    console.log("connected")
})




var bodyParser = require("body-parser")

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// mongoose.connect("mongodb+srv://asif22420:Asif22420%40@cluster0.uim3kpn.mongodb.net/cardb", { useNewUrlParser: true, useUnifiedTopology: true, })

var Message = mongoose.model('Message', {
    name: String,
    message: String
})
// const msgScehma = new mongoose.Schema({
//     chats: {
//         type: String,
//         required: true
//     }
// })
// const Msg = mongoose.model("msg", msgScehma)







app.get("/messages", (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })


})

app.post("/messages", (req, res,) => {
    var message = new Message(req.body)
    message.save((err) => {
        // if (err)
        //     sendStatus(500)


        io.emit("message", req.body)
        res.sendStatus(200)

    })
    // messages.push(req.body)
    // const message = new Msg({ msg: msg })
    // message.save().then(() => {
    //     io.emit("message", msg)


    // })









})
io.on('connection', (socket) => {

    console.log("user connected")

})

// mongoose.connect(dburl, (err) => {
//     console.log("mongodb conected")
// })

var server = http.listen(port, () => {
    console.log('server is listening on port %d', port)

})
