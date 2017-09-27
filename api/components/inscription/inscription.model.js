var mongoose = require('mongoose');

var InscriptionSchema = new mongoose.Schema({
       competitors: String,
       eventCombat: String,
       eventComp: String

});

module.exports = mongoose.model('Inscription', InscriptionSchema);