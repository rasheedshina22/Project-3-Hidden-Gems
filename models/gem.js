const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const gemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: true },
  description: { type: String},
  category: { type: String, required: true },
  location: { type: Object, required: true },
  comments: [ commentSchema ]
})


//virtual

module.exports = mongoose.model('Gem', gemSchema)
