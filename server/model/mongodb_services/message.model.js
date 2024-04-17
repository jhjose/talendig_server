const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    _id: {
        require: true,
        type: mongoose.Types.ObjectId
    },
    content: {
        require: true,
        type: String
    },
    status: {
        require: false,
        type: BigInt
    }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;