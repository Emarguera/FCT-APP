//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var PlaceSchema = new mongoose.Schema({
  name:String,
  capacity: String,
  number: String,
  contact: String,
  secondName: String,
  lastName: String,
  secondlastName: String,
  ubication: String,
  latitude: String,
  lenght: String,
  timestart: String,
  timeclose: String,
  image: String,
  accion: String,
  regDate: String
});

module.exports = mongoose.model('Place', PlaceSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
