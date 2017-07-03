var db = require('./db');

module.exports.handleSignup = (email, password) => {
  //check if email already exists
  //Save the user to the database
  db.saveUser({ email, password});
  //Send the welcome email

};
