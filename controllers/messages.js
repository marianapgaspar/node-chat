const messageModel = require("../models/messages");
path = require('path')
exports.table = (req,res) => {
    const messages = messageModel.find()
        res.sendFile(path.join(__dirname, '..',"/pages/index.html"))
}
exports.tableJson = (req,res) => {
    messageModel.find()
        .then((messages) => {
            res.json({messages})
        })
        .catch(err => console.log(err.message));
}

exports.add = (req,res) => {
    const message = new messageModel(req.body);
    message.save().then(result => res.json({
        add: result
    }))
}

exports.deleteMessage = (req,res) => {
    const filter = {_id: req.body._id};
    messageModel.deleteOne(filter)
        .then(() => res.send("Deletado com sucesso"))
        .catch(err => res.send("Erro: "+err.message))
}
