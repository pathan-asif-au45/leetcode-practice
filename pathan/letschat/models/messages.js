const mongoose = require('mongoose')
const msgScehma = new mongoose.Schema({
    messages: {
        type: String,
        required: true
    }

})
const Msg = mongoose.model('messages', msgScehma)
module.exports = Msg

