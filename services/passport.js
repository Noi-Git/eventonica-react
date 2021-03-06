const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true

}, 
async(accessToken, refreshToken, profile, done) => {
  // check if the userId exist
  const existingUser = await User.findOne({ googleId: profile.id })

    if (existingUser) {
      // we already have a record of the user
      return done(null, existingUser);
    } 
      // we don't have the user record, make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user)
  }
));




  // before re-factor to async
  /*
  (accessToken, refreshToken, profile, done) => {
  // check if the userId exist
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        // we already have a record of the user
        done(null, existingUser);
      } else {
        // we don't have the user record, make a new record
        new User({ googleId: profile.id })
          .save()
          .then(user => done(null, user));
      }
    });
  }
  */