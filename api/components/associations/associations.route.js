var express = require('express');
var router = express.Router();
var associationsController = require('./associations.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/associationsPost')
  .post(function(req, res){
    associationsController.save(req,res);
 });

router.route('/associationsGet')
  .get(function(req, res){
      associationsController.findAll(req,res);
 });

router.route('/associationsUpdate')
  .put(function(req, res){
    associationsController.update(req,res);
 });


// Se exporta el modulo
module.exports = router;