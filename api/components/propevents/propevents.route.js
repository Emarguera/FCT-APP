var express = require('express');
var router = express.Router();
var eventPropController = require('./propevents.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/propevents')
  .post(function(req,res){
    eventPropController.save(req,res);

  });
router.route('/propevents')
  .get(function(req,res){
    eventPropController.findAll(req,res);
  });
router.route('/propeventsUpdate')
  .get(function(req,res){
    eventPropController.findAll(req,res);
  });
module.exports = router;
