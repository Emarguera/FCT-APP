var express = require('express');
var router = express.Router();
var inscriptionController = require('./inscription.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/inscriptionPost')
  .post(function(req, res){
    inscriptionController.save(req,res);
 });

router.route('/inscriptionGet')
  .get(function(req, res){
      inscriptionController.findAll(req,res);
 });
  
// router.route('/users/:id')
//   .delete(function(req, res){
//     userController.remove(req,res);
//  });
// router.route('/inscriptionUpdate')
//   .put(function(req, res){
//     userController.update(req,res);
//  });




// Se exporta el modulo
module.exports = router;