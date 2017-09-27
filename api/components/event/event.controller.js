var event = require('./event.model.js');

module.exports.save = function(req, res){
  var newEvent = new event({
    eventName: req.body.eventName,
    eventLocationName:  req.body.eventLocationName,
    eventAsociation:  req.body.eventAsociation,
    eventTicketPrice:  req.body.eventTicketPrice,
    eventType:  req.body.eventType,
    eventAcademys:  req.body.eventAcademys,
    eventInscriptionCost:  req.body.eventInscriptionCost,
    eventDescription:  req.body.eventDescription,
    eventGuest1:  req.body.eventGuest1,
    eventGuest2:  req.body.eventGuest2,
    eventGuest3:  req.body.eventGuest3,
    eventOrganizer:  req.body.eventOrganizer,
    eventNameContact:  req.body.eventNameContact,
    eventPhone:  req.body.eventPhone,
    eventContactEmail:  req.body.eventContactEmail,
    eventSponsor:  req.body.eventSponsor,
    eventDescriptionSponsor:  req.body.eventDescriptionSponsor,
    combats:  req.body.combats,
    eventImage:  req.body.eventImage,
    eventStartDate: req.body.eventStartDate,
    eventEndDate: req.body.eventEndDate,
    lat:  req.body.lat,
    log:  req.body.log,
    accion: req.body.accion,
    regDate: req.body.regDate
  });

  newEvent.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el evento' + err});
    }else{
      res.json({success:true, msg:'Se registró el evento correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  event.find().then(function(events){
    res.send(events);
  })
}
