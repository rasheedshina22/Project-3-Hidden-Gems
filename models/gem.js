const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: true, maxlength: 250 }
}, {
  timestamps: true
})

const gemSchema = new mongoose.Schema({
  name: { type: String, required: 'Please give your Gem a Name' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: 'Please upload an Image for your Gem a name' },
  description: { type: String},
  category: { type: String, required: 'Please give your Gem a Category' },
  location: { type: Object, required: 'Please give your Gem a Location' },
  comments: [ commentSchema ]
})


//virtual

module.exports = mongoose.model('Gem', gemSchema)
