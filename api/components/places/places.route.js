var express = require('express');
var router = express.Router();
var placeController = require('./places.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/place')
  .post(function(req,res){
    placeController.save(req,res);

  });
router.route('/place')
  .get(function(req,res){
    placeController.findAll(req,res);
  });

module.exports = router;
