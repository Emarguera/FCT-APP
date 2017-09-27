var place = require('./places.model.js');

module.exports.save = function(req, res){
  var newPlace = new place({
    name: req.body.name,
    capacity : req.body.capacity,
    number: req.body.number,
    contact: req.body.contact,
    secondName: req.body.secondName,
    lastName: req.body.lastName,
    secondlastName: req.body.secondlastName,
    ubication: req.body.ubication,
    latitude: req.body.latitude,
    lenght: req.body.lenght,
    timestart: req.body.timestart,
    timeclose: req.body.timeclose,
    image: req.body.image,
    accion: req.body.accion,
    regDate: req.body.regDate
  });

  newPlace.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la academia' + err});
    }else{
      res.json({success:true, msg:'Se registró la academia correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  place.find().then(function(places){
    res.send(places);
  })
};
