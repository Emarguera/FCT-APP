var academy = require('./academys.model.js');

module.exports.save = function(req, res){
  var newAcademy = new academy({
    name: req.body.name,
    address : req.body.address,
    number: req.body.number,
    contact: req.body.contact,
    status: req.body.status,
    secondName: req.body.secondName,
    lastName: req.body.lastName,
    secondlastName: req.body.secondlastName,
    image: req.body.image,
    accion: req.body.accion,
    regDate: req.body.regDate
  });

  newAcademy.save(function(err){
    if(err){
      res.json({success:false, msg:'No se pudo registrar la academia' + err});
    }else{
      res.json({success:true, msg:'Se registró la academia correctamente'});
    }
  });
}

module.exports.findAll = function(req,res){
  academy.find().then(function(academys){
    res.send(academys);
  })
}

module.exports.update = function(req,res){
  console.log(req.body.id);
  academy.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });
}