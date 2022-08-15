const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3100);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas del Servidor
app.use('/api/songs', require('./routes/canciones.routes'));
//Iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log("Servidor corriendo en el puerto " + app.get('port'));
});
