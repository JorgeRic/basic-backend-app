'use strict'

const express = require('express');
const router = express.Router();
const Aplication = require('../models/Aplication')

//toma todas las viviendas de la base de datos
router.get('/viv', async (req, res, next) => {
  try{
const listOfViv = await Aplication.find()
res.status(200).json({listOfViv})

} catch(error){
  next(error)
}
})
//crea nueva vivienda
router.post('/viv/new', async (req, res, next) => {
  try{
    const newViv = req.body
    const createdViv = await Aplication.create(newViv)
    res.status(200).json(createdViv)

  }catch (error){
    next(error)
  }
})

//modifica las viviendas
router.put('/viv/:id/edit', (req, res ,next) => {

})

//borra las viviendas
router.delete('/viv/:id/delete', (req, res,next) => {

})

module.exports = router