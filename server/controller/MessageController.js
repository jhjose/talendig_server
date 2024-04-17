const Message = require('../model/mongodb_services/message.model');

const get = async (_req, res)=>{
    const messages = await Message.find({status: 1}, function(err, docs){
        console.log('Error detectado en el modelo: ', err)
        
        if(err){
            console.log('Error detectado en el modelo: ', err)
        }else{
            console.log('Docs Result: ', docs);
        }

    });

    res.send(messages);
}

const getById = async (_req, res)=>{
    const message = await Message.findOne(req.params.id);

    res.send(message);
}

const create = async (req, res)=>{
    const new_message = await Message.create(req.body);

    res.send(new_message);
}

const update = async (req, res)=>{
    const message_updated = await Message.findOneAndUpdate(req.params.id, req.body);

    res.send(message_updated);
}

const deleteMessage = async (req, res)=>{
    const message_id = req.params.id;

    await Message.findByIdAndRemove(message_id);

    res.send(`Message has been eliminated with ID: ${message_id}`);
}

module.exports = {get, create, update, deleteMessage, getById}