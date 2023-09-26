const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String, // Password field should not be required here
  googleId: String, // Add this field for Google OAuth
  // Add other user properties as needed
  resetToken: String,
  resetTokenExpiration: Date,
});

// Ensure the usernameField is 'email' for Passport Local Strategy
const passportLocalMongooseOptions = {
  usernameField: 'email',
};

userSchema.plugin(passportLocalMongoose, passportLocalMongooseOptions);
module.exports = mongoose.model('User', userSchema);
