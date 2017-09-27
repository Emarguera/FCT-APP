var Inscription = require('./inscription.model.js');
var bcrypt = require('bcrypt');

module.exports.save = function(req,res){ //exporta el controlador
  var currentPass;
  bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(req.body.password,salt,function(err,hash){
        currentPass = hash;

        var newInscription = new Inscription ({
        competitors: req.body.competitors,
        eventCombat: req.body.eventCombat,
        eventComp: req.body.eventComp
      });

        newInscription.save(function(err){
          if(err){
            res.json({success:false,msg:'El competidor ya está registrado.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });

      });
    });

}

module.exports.findAll = function(req,res){
  Inscription.find().then(function(inscriptions){
    res.send(inscriptions);
  });
};