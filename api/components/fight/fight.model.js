//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var FightSchema = new mongoose.Schema({
  eventCombat:String,
  eventComp: String,
  fighter1: String,
  fighter2: String,
  fighter3: String,
  fighter4: String,
  fighter5: String,
  winner: String,
  photo: String
});

module.exports = mongoose.model('Fight', FightSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
