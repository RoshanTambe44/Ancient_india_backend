const mongoose = require('mongoose');



const WarriorSchema = new mongoose.Schema({
    name: String,
    era: {
        type:String,
        require: true
    },
    description: {
        type: String,
        require:true
    },
    occupation: {
        type: String,
        require:true
    },
    contributions: {
        type: String,
        require:true
    },
    history: {
        type: [{ year:Number, event:String, details:String, resource:{images:Array, websites:Array} }],
        require:true
    },



});
const Warrior = mongoose.model('Warrior', WarriorSchema);

module.exports = Warrior;