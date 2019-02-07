const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String},
  category: { type: String, required: true },
  location: { type: String, required: true},
  gems: { type: Array, required: true },
  comments: [ commentSchema ]
})


module.exports = mongoose.model('Trip', tripSchema)
