var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	firstName: String,
	secondName: String,
  	lastName: String,
  	secondlastName: String,
  	identification: String,
  	phone: String,
  	direction: String,
  	birthday: String,
  	age: String,
  	academy: String,
  	status: String,
  	gender: String,
  	role: String,
  	email:String,
    password:String,
		accion: String,
		weightCat: String,
		rank: String,
		regDate: String,
    photo: String

});

module.exports = mongoose.model('User', UserSchema);
