'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const viviendaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  referencia: {
    type: Number,
    required: true,
    unique: true
  },
  clase: {
    type: String,
    enum: ['venta', 'alquiler'],
    required: true
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
  description: {
    type: String
  },
  numGarajes: {
    type: Number,
  },
  piscina: {
    type: String,
    enum: ['Si', 'No']
  },
  jardin: {
    type: String,
    enum: ['Si', 'No']
  },
  metros:{
    type: Number,
  },
  ciudad: {
    type: String,
    enum: ['Alicante','San Vicente','San Juan','Campello','El Altet','Agost']
  },
  direccion: {
    type: String
  },
  nombrePropietario: {
    type: String,
  },
  telefonoPropietario: {
    type: String,
  },
  mailPropietario: {
    type: String
  },
  
  
});

const ViviendasDB = mongoose.model('Aplication', viviendaSchema);

module.exports = ViviendasDB;