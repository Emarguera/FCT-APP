var express = require('express');
var router = express.Router();
var FightController = require('./fight.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/fight')
  .post(function(req,res){
    FightController.save(req,res);

  });
router.route('/fight')
  .get(function(req,res){
    FightController.findAll(req,res);
  });
  router.route('/fightUpdate')
  .put(function(req, res){
    FightController.update(req,res);
 });

module.exports = router;
