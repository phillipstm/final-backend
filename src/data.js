'use strict';

const ItemModel = require('./item-model.js');

const Data = { };

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data);
    await item.save();
    res.status(200).json(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  const items = await ItemModel.find({});
  res.status(200).json(items);
}

Data.getOneItem = async(req, res) => {
  console.log('do we have id',req.params.id);
  const id = req.params.id;
  const items = await ItemModel.find({_id:id});
  console.log('item', items);
  res.status(200).json(items[0]);
}

//add the delete here based on above.
Data.deleteOneItem = async(req, res) => {
  console.log('do we have delete id',req.params.id);
  const id = req.params.id;
  const items = await ItemModel.findByIdAndDelete({_id:id});
  console.log('item', items);
  res.status(200).json(items[0]);
}


module.exports = Data;
