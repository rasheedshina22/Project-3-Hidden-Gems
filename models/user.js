const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'A Username is required', unique: true },
  image: { type: String, required: 'An Image is required' },
  email: { type: String, required: 'An Email is required', unique: true },
  password: { type: String, required: 'A password is required' },
  follows: { type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }] }
})

userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.virtual('gems',{
  ref: 'Gem',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('trips',{
  ref: 'Trip',
  localField: '_id',
  foreignField: 'user'
})

userSchema.virtual('following',{
  ref: 'User',
  localField: '_id',
  foreignField: 'follows'
})

userSchema.set('toJSON',{
  virtuals: true,
  transform(doc, json){
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)
