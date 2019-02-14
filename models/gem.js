const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  content: { type: String, required: 'Please add your Comment', maxlength: 250 }
}, {
  timestamps: true
})

const gemSchema = new mongoose.Schema({
  name: { type: String, required: 'Please give your Gem a Name' },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  image: { type: String, required: 'Please upload an Image for your Gem a name' },
  description: { type: String},
  category: { type: String, required: 'Please give your Gem a Category' },
  location: { type: { lat: Number, lng: Number }, required: 'Please give your Gem a Location' },
  address: { type: String },
  comments: [ commentSchema ]
})

gemSchema.virtual('trips',{
  ref: 'Trip',
  localField: '_id',
  foreignField: 'gems'
})

gemSchema.set('toJSON',{
  virtuals: true,
  transform(doc, json){
    return json
  }
})

module.exports = mongoose.model('Gem', gemSchema)
