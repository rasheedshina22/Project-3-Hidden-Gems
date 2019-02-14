const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const tripSchema = new mongoose.Schema({
  name: { type: String, required: 'Please give your Trip a Name' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: 'Please give your Trip an Image' },
  description: { type: String},
  category: { type: String, required: 'Please give your Trip a Category'},
  location: { type: String},
  gems: { type: [{ type: mongoose.Schema.ObjectId, ref: 'Gem', required: 'Please select the Gems included in your Trip' }], required: 'Please select the Gems included in your Trip' },
  comments: [ commentSchema ]
})

module.exports = mongoose.model('Trip', tripSchema)
