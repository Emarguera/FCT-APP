//Requerimos el modelo  de usuarios
var User = require('./users.model.js');
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

module.exports.save = function(req,res){ //exporta el controlador

        var newUser = new User({
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          lastName: req.body.lastName,
          secondlastName: req.body.secondlastName,
          identification: req.body.identification,
          phone: req.body.phone,
          email: req.body.email,
          direction: req.body.direction,
          birthday: req.body.birthday,
          age: req.body.age,
          academy: req.body.academy,
          status: req.body.status,
          gender: req.body.gender,
          role: req.body.role,
          password: req.body.password,
          accion: req.body.accion,
          weightCat: req.body.weightCat,
          rank: req.body.rank,
          regDate: req.body.regDate,
          photo: req.body.photo
        });

          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'bluedevs01@gmail.com',
              pass: 'Bluedevsproyecto'
            }
          });

          var mailOptions = {
            from: 'bluedevs01@gmail.com',
            to: req.body.email,
            subject: 'Bienvenido ' + req.body.firstName + ' a la app de la FCT',
            text: 'Inicie sesión con la siguiente contraseña: ' + req.body.password
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        newUser.save(function(err){
          if(err){
            res.json({success:false,msg:'El correo electrónico ya existe.'});
          }else {
            res.json({success:true,msg:'Se ha registrado correctamente.'});
          }
        });



}

module.exports.findAll = function(req,res){
  User.find().then(function(users){
    res.send(users);
  });
};

module.exports.remove = function(req,res){
  console.log(req.body.id);
  User.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
module.exports.update = function(req,res){
  User.findByIdAndUpdate(req.body._id, { $set: req.body}, function (err, user) {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }

  });

}
