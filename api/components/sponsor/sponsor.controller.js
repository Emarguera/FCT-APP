var sponsor = require('./sponsor.model.js');

module.exports.save = function(req, res){
  var newSponsor = new sponsor({
    commercialName: req.body.commercialName,
    realName : req.body.realName,
    sponsor: req.body.sponsor,
    photo: req.body.photo,
    regDate: req.body.regDate,
    accion: req.body.accion
  });

  newSponsor.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar el patrocinador' + err});
    }else{
      res.json({success:true, msg:'Se registró el patrocinador correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  sponsor.find().then(function(sponsors){
    res.send(sponsors);
  });
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  sponsor.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}