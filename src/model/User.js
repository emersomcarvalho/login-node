const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    
    email: {
        type:String,
        require: true
    },
    senha: {
        type: String,
        require: true

    },
    creatAt: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model('User',  UserSchema);