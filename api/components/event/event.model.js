//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var EventSchema = new mongoose.Schema({
  eventName:String,
  eventLocationName: String,
  eventAsociation: String,
  eventTicketPrice: String,
  eventType: String,
  eventAcademys: String,
  eventInscriptionCost: String,
  eventDescription: String,
  eventGuest1: String,
  eventGuest2: String,
  eventGuest3: String,
  eventOrganizer: String,
  eventNameContact: String,
  eventPhone: String,
  eventContactEmail: String,
  eventSponsor: String,
  eventDescriptionSponsor: String,
  eventImage: String,
  lat: String,
  log: String,
  eventStartDate: String,
  eventEndDate: String,
  accion: String,
  regDate: String,
  combats: [
    {
      combatGender: String,
      combatWeight: String,
      combatAge: String
    }
  ]
});

module.exports = mongoose.model('Event', EventSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
