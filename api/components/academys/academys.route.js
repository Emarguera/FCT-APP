var express = require('express');
var router = express.Router();
var academyController = require('./academys.controller.js');

//para aquellas rutas que ocupen un id

router.param('id', function(req, res, next, id){
  req.body.id = id;
  next();
});

router.route('/academy')
  .post(function(req,res){
    academyController.save(req,res);

  });
router.route('/academy')
  .get(function(req,res){
    academyController.findAll(req,res);
  });
  router.route('/academyUpdate')
  .put(function(req, res){
    academyController.update(req,res);
 });

module.exports = router;
