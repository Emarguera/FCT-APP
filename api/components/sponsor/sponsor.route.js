var express = require('express');
var	router = express.Router();
var sponsorController = require('./sponsor.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/sponsor')
  .post(function(req, res){
    sponsorController.save(req,res);
 	});

router.route('/sponsor')
  .get(function(req, res){
      sponsorController.findAll(req,res);
  });
router.route('/sponsor/:id')
  .delete(function(req, res){
    sponsorController.remove(req,res);
 	});
router.route('/sponsorUpdate')
  .put(function(req, res){
    sponsorController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;