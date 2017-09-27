var fight = require('./fight.model.js');

module.exports.save = function(req, res){
  var newFight = new fight({
    eventCombat: req.body.eventCombat,
    eventComp : req.body.eventComp,
    fighter1: req.body.fighter1,
    fighter2: req.body.fighter2,
    fighter3: req.body.fighter3,
    fighter4: req.body.fighter4,
    fighter5: req.body.fighter5,
    winner: req.body.winner, 
    photo: req.body.photo
  });

  newFight.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la academia' + err});
    }else{
      res.json({success:true, msg:'Se registró la academia correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  fight.find().then(function(fights){
    res.send(fights);
  })
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  academy.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
}