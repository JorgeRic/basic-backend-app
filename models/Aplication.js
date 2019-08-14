'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const aplicationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
    unique: true
  },
  
  price: {
    type: Number,
  },
  type: {
    type: String,
    enum: ['piso','chalet','planta baja','bungalow','apartamento','atico']
  },
  image: {
    type: String,
  },
  numHab: {
    type: Number,
  },
  numAseos: {
    type: Number,
  },
  description: String
  
  
});

const Aplication = mongoose.model('Aplication', aplicationSchema);

module.exports = Aplication;