const mongoose = require('mongoose');
var user = 'Admin';
var password = 'n3uSEreQFSLgcMK7';
var db = 'songs',
//Configuramos la url de la base de datos
url = `mongodb+srv://${user}:${password}@cluster0.7w0einf.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(url,
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(db => console.log('conectado a la base de datos'))
        .catch(err => console.log(err));

module.exports = mongoose;