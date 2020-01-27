
const User = require('../model/User');

module.exports = {

    async get (req, res) {
        const devs = await User.find();
        return res.json(devs);
    },

   async store (req, res){
       const { username, email, senha } = req.body;
       
    var user = await User.findOne({ username, email, senha });
        
    if(!user){

    user = await User.create({ username, email, senha} );

         }
            
        return res.json(user);
    }

};