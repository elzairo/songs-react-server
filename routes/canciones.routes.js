const express = require('express');
const router = express.Router();

const songs = require('../controllers/cancion.controller');

//Obtener todas las canciones - R - Read
router.get('/', songs.getSongs);

//Crear una cancion
router.post('/', songs.createSong);

//Obtener una cancion R - Read
//router.get('/:id', songs.getSong);

//Obtener una cancion R - Read
router.get('/:titulo', songs.getSongName);

//Actualizar una cancion
router.put('/:id', songs.updateSong);

//Eliminar un empleado
router.delete('/:id', songs.deleteSong);

module.exports = router;