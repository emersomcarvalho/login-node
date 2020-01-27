const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
    email:{
        type: String,
        require: true
    },

    creatAt: {
        type: Date,
        default: Date.now,
=======
    username:{
        type: String,

>>>>>>> Ajuste local
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