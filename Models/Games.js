const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    type: {
        type:String,
        required:true
    },
    company:String,
    year:Number
});

module.exports = mongoose.model('games',GamesSchema);