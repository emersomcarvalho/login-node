const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    email:{ String,
    require: true
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
    

});

module.exports = mongoose.model('User',  UserSchema);