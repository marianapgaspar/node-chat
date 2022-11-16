const mongoose = require("mongoose");

const messages = new mongoose.Schema({
    user: {
        type: String,
        required: "Usuário está faltando"
    },
    message: {
        type: String,
        require: "Não esqueça do texto da mensagem"
    },
    date: {
        type : Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model("message", messages);