var eventProp = require('./propevents.model.js');

module.exports.save = function(req, res){
  var newEventProp = new eventProp({
    eventPropName: req.body.eventPropName,
    eventPropCapacity : req.body.eventPropCapacity,
    eventPropStartDate: req.body.eventPropStartDate,
    eventPropFinishDate: req.body.eventPropFinishDate,
    eventPropLocationName: req.body.eventPropLocationName,
    eventPropInscriptionCost: req.body.eventPropInscriptionCost,
    eventPropOrganize: req.body.eventPropOrganize,
    eventPropContactName: req.body.eventPropContactName,
    eventPropContactEmail: req.body.eventPropContactEmail,
    eventPropContactNumber: req.body.eventPropContactNumber,
    eventPropState: req.body.eventPropState,
    role: req.body.role
  });

  newEventProp.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la propuesta' + err});
    }else{
      res.json({success:true, msg:'Se registró la propuesta correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  eventProp.find().then(function(eventsprop){
    res.send(eventsprop);
  })
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  eventProp.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
