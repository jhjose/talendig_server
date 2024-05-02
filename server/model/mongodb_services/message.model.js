const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    content: {
        require: true,
        type: String
    },
    status: {
        require: false,
        type: Boolean
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;