var express = require('express');
var router = express.Router();
var userController = require('./users.controller.js');

router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/usersPost')
  .post(function(req, res){
    userController.save(req,res);
 });

router.route('/usersGet')
  .get(function(req, res){
      userController.findAll(req,res);
 });
// router.route('/users/:id')
//   .delete(function(req, res){
//     userController.remove(req,res);
//  });
router.route('/usersUpdate')
  .put(function(req, res){
    userController.update(req,res);
 });




// Se exporta el modulo
module.exports = router;