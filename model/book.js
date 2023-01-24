const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Author:{
        type: String,
        required: true
    },
   Publisher:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book',bookschema)