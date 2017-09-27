var Association = require('./associations.model.js');
var bcrypt = require('bcrypt');

module.exports.save = function(req,res){ //exporta el controlador
  var currentPass;
  bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(req.body.password,salt,function(err,hash){
        currentPass = hash;


        var newAssociation = new Association({
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          lastName: req.body.lastName,
          secondlastName: req.body.secondlastName,
          legal:  req.body.legal,
          email: req.body.email,
          associationTipe: req.body.associationTipe,
          descriptionAsso: req.body.descriptionAsso,
          accion: req.body.accion,
          regDate: req.body.regDate
        });

        newAssociation.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });

      });
    });
}

module.exports.findAll = function(req,res){
  Association.find().then(function(associations){
    res.send(associations);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  Association.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  console.log(req.body.id);
  Association.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}
