const mongoose = require('mongoose');

const baglan = () => {
    mongoose.connect('mongodb://ceyuboglu:02081967ts@ds115653.mlab.com:15653/gamesapi', { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('mongodb connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('mongodb err'+err);
    });
    mongoose.Promise = global.Promise;
};
module.exports = baglan();
