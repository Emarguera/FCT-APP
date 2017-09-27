var mongoose = require('mongoose');

var AssociationSchema = new mongoose.Schema({
      firstName: {type: String, required: false},
      secondName: {type: String, required: false},
      lastName: {type: String, required: false},
      secondlastName: {type: String, required: false},
      legal:  {type: String, required: false},
      email: {type: String, unique: true, required: false},
      associationTipe: {type: String, required: false},
      descriptionAsso: {type: String, required: false},
      accion: String,
      regDate: String
});

module.exports = mongoose.model('Association', AssociationSchema);
