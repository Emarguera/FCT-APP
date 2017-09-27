//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var eventPropSchema = new mongoose.Schema({
  eventPropName: String,
  eventPropCapacity: String,
  eventPropStartDate: String,
  eventPropFinishDate: String,
  eventPropLocationName: String,
  eventPropInscriptionCost: String,
  eventPropOrganize: String,
  eventPropContactName: String,
  eventPropContactEmail: String,
  eventPropContactNumber: String,
  eventPropState: String,
  role: String
});

module.exports = mongoose.model('Eventprop', eventPropSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
