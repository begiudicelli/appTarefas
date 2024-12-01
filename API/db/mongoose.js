// Esse arqivo vai cuidar do mongoDB e conectar a logica na data base do mongoDB

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/appTarefas').then(() =>{
    console.log("Connected to MongoDB success")
}).catch((e) => {
    console.log("Error while attemptin to connect to MongoDB");
    console.log(e);
});

//To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
