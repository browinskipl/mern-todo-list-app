const express = require('express');
const router = express.Router();
const List = require('../models/List');

router.get('/', async (req, res) => {
    try{
        const lists = await List.find();
        res.json(lists); 
    } catch (error) {
        res.json({message: error});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const list = await List.findById(req.params.id);
        res.json(list);
    } catch(error) {
        res.json({message:error})
    }
});

router.post('/', async (req,res) => {
    const list = new List({
        name: req.body.name,
        description: req.body.description
    });
    try{
        const savedList = await list.save()
        res.json(savedList);
    } catch (error) {
        res.json({message: error});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const list = await List.remove({_id: req.params.id});
        res.json(list);
    } catch(error) {
        res.json({message:error});
    }
});

module.exports = router;
