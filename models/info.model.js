const mongoose = require('mongoose');



const InfoSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    history: {
        type: String,
        require:true
    },
    images: {
        type: Array,
        require:true
    },
    details: {
        type: Object,
        require:true
    },
    architecture: {
        type: Object,
        require:true
    },
    access: {
        type: Object,
        require:true
    },
   



});
const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;