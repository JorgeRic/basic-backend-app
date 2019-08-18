'use strict'

const express = require('express');
const router = express.Router();
const ViviendasDB = require('../models/Aplication')

//toma todas las viviendas de la base de datos
router.get('/viviendas', async (req, res, next) => {
  try{
const listOfViv = await ViviendasDB.find()
res.status(200).json({listOfViv})
console.log(listOfViv, 'Hola')

} catch(error){
  next(error)
}
})
//crea nueva vivienda
router.post('/viviendas/new', async (req, res, next) => {
  try{
    const newViv = req.body;
    const createdViv = await ViviendasDB.create(newViv)
    res.status(200).json(createdViv)

  } catch (error) {
    next(error)
  }
})

router.post('/viviendas/view', async (req, res, next) => {
  try{
    const newView = req.body
    const showView = await ViviendasDB.findOne(newView)
    res.status(200).json(showView)

  }catch (error){
    next(error)
  }
})


//modifica las viviendas
router.put('/viviendas/:id/update', async (req, res ,next) => {
  console.log("aqui estamos", req)
  const {id} = req.params
  const vivupdated = req.body
  try{
    const updated = await ViviendasDB.findByIdAndUpdate(id, vivupdated, {new: true})
    res.status(200).json(updated)
  }catch(error){
    next(error)
  }

})

//borra las viviendas
router.delete('/viviendas/:id/delete', async (req, res,next) => {
  const {id} = req.params
  try{
    await ViviendasDB.findByIdAndDelete(id)
    res.status(200).json({message: 'Vivienda eliminada'})
  }catch(error){
    next(error)
  }

})

router.get('/viviendas/:id/detail', async (req, res, next) => {
  const {id} = req.params
  try {
    console.log(id, 'Aqui.....')
    const detail = await ViviendasDB.findById(id)
    res.status(200).json(detail)
  } catch (error) {
    next(error)
  }
})


router.post('/viviendas/search', async (req, res, next) => {
  try {
    console.log(req.body);
    const query = req.body;
    // const refer = await Aplication.find({ referencia });

    // Filtrado de parámetros
    for (var key in query) {
      if (query[key] == '' || query[key] == 0)
        delete query[key];
      else
        if (['price', 'metros', 'numHab', 'numAseos', 'numGarajes'].indexOf(key) > -1)
          query[key] = { $lte: query[key] };
    };

    console.log(query);

    const refer = await ViviendasDB.find(query);

    res.status(200).json(refer)

  } catch (error) {
    next(error);
  }
});

// router.post('/viviendas/search', async (req, res, next) => {
//   try {
//     const { referencia, title, price, image, numHab, numAseos,id, type, description} = req.body;
//     const refer = await Aplication.find({ numHab });


//     res.status(200).json(refer)

//   } catch (error) {
//     next(error);
//   }
// });





module.exports = router