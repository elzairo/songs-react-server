const Songs = require('../models/Canciones');

const songController = { }

//Listar todas las canciones
songController.getSongs =  async (req, res) =>{
    const canciones = await Songs.find();
    res.json(canciones);
};//Fin de getSongs

//Crear una cancion
songController.createSong = async (req, res) =>{
    const cancion = new Songs({
        titulo: req.body.titulo,
        grupo: req.body.grupo,
        anio: req.body.anio,
        genero: req.body.genero,
    });
    await cancion.save();
    res.json({status: "Cancion guardada correctamente"});
}; //Fin de createSong

//Consultar una cancion por id
songController.getSong = async (req, res) =>{
    const song = await Songs.findById(req.params.id);
    res.json(song);
}; //Fin de getSong

//Consultar canciones por nombre
songController.getSongName = async (req, res) => {
    const song = await  Songs.find({titulo: new RegExp(req.params.titulo)}); // igual hacer busquedas en mondodb que /hol/ tecleando las primeras letra y parecido al LIKE de MYSQL
    //const song = await Songs.find({titulo: req.params.titulo});
    console.log(song);
    res.json(song);
}

//Actualizar una cancion
songController.updateSong = async (req, res) =>{
    const { id } = req.params;
    const cancion = {
        titulo: req.body.titulo,
        grupo: req.body.grupo,
        anio: req.body.anio,
        genero: req.body.genero,
    };
    await Songs.findByIdAndUpdate(id, {$set: cancion}, {new: true});
    res.json({status: 'Cancion actualizada'});
}; //Fin de updateSong

//Eliminar una cancion
songController.deleteSong = async (req, res) =>{
    const { id } = req.params;
    await Songs.findByIdAndDelete(id);
    res.json({status: 'cancion eliminada'});
}; //Fin de deleteSong

module.exports = songController;