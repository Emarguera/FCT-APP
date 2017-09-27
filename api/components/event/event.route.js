var express = require('express');
var router = express.Router();
var eventController = require('./event.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/event')
  .post(function(req,res){
    eventController.save(req,res);

  });
router.route('/event')
  .get(function(req,res){
    eventController.findAll(req,res);
  });

module.exports = router;
