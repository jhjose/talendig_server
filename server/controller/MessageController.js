const Message = require('../model/mongodb_services/message.model');

const get = async ()=>{
    return await Message.find({status: 1});
}

const getById = async (_req, res)=>{
    return await Message.findById({_id: _req.params.id});
}

const create = async (body)=>{
    return await Message.create(body);
}
 
const update = async (id, body)=>{
    return await Message.findOneAndUpdate({_id: id}, body);
}

const destroy = async (id)=>{
    await Message.deleteOne({_id: id});

    return id;
}

module.exports = {get, create, update, destroy, getById}