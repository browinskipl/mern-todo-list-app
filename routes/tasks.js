const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find({list: req.body.list});
        res.json(tasks); 
    } catch (error) {
        res.json({message: error});
    }
});
/*
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch(error) {
        res.json({message:error})
    }
});
*/

router.post('/', async (req,res) => {
    const task = new Task({
        task: req.body.task,
        list: req.body.list
    });
    try{
        const savedTask = await task.save()
        res.json(savedTask);
    } catch (error) {
        res.json({message: error});
    }
});
/*
router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.updateOne(
            {_id: req.params.id},
            {$set: {name: req.body.name,
                description: req.body.description}
            });
        res.json(task);
    } catch (error) {
        res.json({message: error});
    }
});
*/
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.remove({_id: req.params.id});
        res.json(task);
    } catch(error) {
        res.json({message:error});
    }
});

module.exports = router;
